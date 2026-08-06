import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FORMSPREE_FORM_ID } from '../../config/contact-form.config';
import { reveal } from '../../shared/reveal.animation';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  animations: [reveal],
})
export class Contact {
  private readonly formBuilder = inject(FormBuilder);
  private toastTimeout?: ReturnType<typeof setTimeout>;

  protected readonly submitted = signal(false);
  protected readonly sending = signal(false);
  protected readonly success = signal(false);
  protected readonly errorMessage = signal('');
  protected readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected fieldInvalid(field: 'name' | 'email' | 'message'): boolean {
    const control = this.contactForm.controls[field];
    return control.invalid && (control.touched || this.submitted());
  }

  protected hasError(field: 'name' | 'email' | 'message', error: string): boolean {
    return this.fieldInvalid(field) && this.contactForm.controls[field].hasError(error);
  }

  protected async submit(): Promise<void> {
    this.submitted.set(true);
    this.errorMessage.set('');
    this.success.set(false);

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (FORMSPREE_FORM_ID === 'SEU_FORM_ID') {
      this.errorMessage.set('O envio ainda precisa ser configurado com o formulário do Formspree.');
      return;
    }

    this.sending.set(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.contactForm.getRawValue()),
      });

      if (!response.ok) throw new Error('Formspree request failed');

      this.contactForm.reset();
      this.submitted.set(false);
      this.success.set(true);
      this.toastTimeout && clearTimeout(this.toastTimeout);
      this.toastTimeout = setTimeout(() => this.success.set(false), 4500);
    } catch {
      this.errorMessage.set('Não foi possível enviar sua mensagem. Tente novamente em instantes.');
    } finally {
      this.sending.set(false);
    }
  }
}
