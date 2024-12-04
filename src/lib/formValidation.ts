// src/lib/formValidation.ts

export function validateForm(formData: any) {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
        errors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = 'Invalid email format';
    }

    if (!formData.industry) {
        errors.industry = 'Please select an industry';
    }

    if (!formData.subject.trim()) {
        errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
        errors.message = 'Message is required';
    }

    return errors;
}