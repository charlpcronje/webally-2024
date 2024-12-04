<!-- src/lib/components/ContactForm.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { validateForm } from '$lib/formValidation';
    import { browser } from '$app/environment';

    let formData = {
        fullName: '',
        email: '',
        industry: '',
        subscribeNewsletter: false,
        subject: '',
        message: ''
    };

    let errors: Record<string, string> = {};
    let submitStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
    let errorMessage = '';
    let recaptchaToken = '';

    const industryGroups = [
        {
            name: "Technology",
            industries: [
                "Software Development",
                "IT Services",
                "Cybersecurity",
                "Cloud Computing",
                "Artificial Intelligence",
                "Telecommunications"
            ]
        },
        {
            name: "Healthcare",
            industries: [
                "Hospitals & Clinics",
                "Pharmaceuticals",
                "Medical Devices",
                "Biotechnology",
                "Health Insurance",
                "Telemedicine"
            ]
        },
        {
            name: "Finance",
            industries: [
                "Banking",
                "Insurance",
                "Investment Management",
                "Financial Technology (FinTech)",
                "Accounting",
                "Real Estate"
            ]
        },
        {
            name: "Manufacturing",
            industries: [
                "Automotive",
                "Aerospace",
                "Electronics",
                "Textiles",
                "Food Processing",
                "Chemical Manufacturing"
            ]
        },
        {
            name: "Retail & E-commerce",
            industries: [
                "Online Retail",
                "Brick and Mortar Retail",
                "Wholesale",
                "Fashion & Apparel",
                "Consumer Electronics",
                "Grocery"
            ]
        },
        {
            name: "Education",
            industries: [
                "K-12 Education",
                "Higher Education",
                "E-learning",
                "Educational Technology",
                "Professional Training",
                "Special Education"
            ]
        },
        {
            name: "Media & Entertainment",
            industries: [
                "Film & Television",
                "Music",
                "Publishing",
                "Gaming",
                "Advertising",
                "Streaming Services"
            ]
        },
        {
            name: "Transportation & Logistics",
            industries: [
                "Automotive Transportation",
                "Air Transportation",
                "Maritime Transportation",
                "Rail Transportation",
                "Logistics Services",
                "Last-mile Delivery"
            ]
        },
        {
            name: "Agriculture",
            industries: [
                "Crop Farming",
                "Livestock Farming",
                "Aquaculture",
                "Forestry",
                "Agricultural Technology",
                "Food Production"
            ]
        },
        {
            name: "Other",
            industries: ["Other"]
        }
    ];

    const handleInput = () => {
        if (browser) {
            sessionStorage.setItem('contactFormData', JSON.stringify(formData));
        }
    };

    async function handleSubmit() {
        errors = validateForm(formData);
        if (Object.keys(errors).length > 0) return;

        submitStatus = 'submitting';

        try {
            const response = await fetch('/api/contact.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken
                })
            });

            const result = await response.json();

            if (result.success) {
                submitStatus = 'success';
                sessionStorage.removeItem('contactFormData');
                // Form data is kept for reference in success message
            } else {
                errorMessage = result.message || 'An error occurred while submitting the form.';
                submitStatus = 'error';
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            errorMessage = 'Network error. Please check your connection and try again.';
            submitStatus = 'error';
        }
    }

    onMount(() => {
        if (browser) {
            const storedData = sessionStorage.getItem('contactFormData');
            if (storedData) {
                formData = JSON.parse(storedData);
            }
        }
    });
</script>

{#if submitStatus === 'success'}
    <div class="success-message p-8 text-center">
        <div class="icon-check mb-4">
            <svg class="w-16 h-16 mx-auto text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
        </div>
        <h3 class="text-xl text-[#4CAF50] font-semibold mb-2">Message Sent Successfully!</h3>
        <p class="text-gray-300 mb-4">Thank you for contacting us, {formData.fullName}!</p>
        <p class="text-gray-400 text-sm">We've sent a confirmation email to {formData.email}.<br>We'll get back to you soon.</p>
    </div>
{:else}
    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div>
            <label for="fullName" class="form-label">Full Name</label>
            <input
                type="text"
                id="fullName"
                bind:value={formData.fullName}
                on:input={handleInput}
                class="form-input"
                aria-required="true"
                aria-invalid={errors.fullName ? 'true' : 'false'}
                disabled={submitStatus === 'submitting'}
            />
            {#if errors.fullName}<span class="text-red-500 text-sm" role="alert">{errors.fullName}</span>{/if}
        </div>

        <div>
            <label for="email" class="form-label">Email</label>
            <input
                type="email"
                id="email"
                bind:value={formData.email}
                on:input={handleInput}
                class="form-input"
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                disabled={submitStatus === 'submitting'}
            />
            {#if errors.email}<span class="text-red-500 text-sm" role="alert">{errors.email}</span>{/if}
        </div>

        <div>
            <label for="industry" class="form-label">Industry</label>
            <select
                id="industry"
                bind:value={formData.industry}
                on:change={handleInput}
                class="form-input"
                aria-required="true"
                aria-invalid={errors.industry ? 'true' : 'false'}
                disabled={submitStatus === 'submitting'}
            >
                <option value="">Select an industry</option>
                {#each industryGroups as group}
                    <optgroup label={group.name}>
                        {#each group.industries as industry}
                            <option value={industry}>{industry}</option>
                        {/each}
                    </optgroup>
                {/each}
            </select>
            {#if errors.industry}<span class="text-red-500 text-sm" role="alert">{errors.industry}</span>{/if}
        </div>

        <div class="flex items-center">
            <input
                type="checkbox"
                id="newsletter"
                bind:checked={formData.subscribeNewsletter}
                on:change={handleInput}
                class="form-checkbox"
                disabled={submitStatus === 'submitting'}
            />
            <label for="newsletter" class="ml-2 text-gray-300">Subscribe to newsletter</label>
        </div>

        <div>
            <label for="subject" class="form-label">Subject</label>
            <input
                type="text"
                id="subject"
                bind:value={formData.subject}
                on:input={handleInput}
                class="form-input"
                aria-required="true"
                aria-invalid={errors.subject ? 'true' : 'false'}
                disabled={submitStatus === 'submitting'}
            />
            {#if errors.subject}<span class="text-red-500 text-sm" role="alert">{errors.subject}</span>{/if}
        </div>

        <div>
            <label for="message" class="form-label">Message</label>
            <textarea
                id="message"
                bind:value={formData.message}
                on:input={handleInput}
                rows="4"
                class="form-input form-textarea"
                aria-required="true"
                aria-invalid={errors.message ? 'true' : 'false'}
                disabled={submitStatus === 'submitting'}
            ></textarea>
            {#if errors.message}<span class="text-red-500 text-sm" role="alert">{errors.message}</span>{/if}
        </div>

        <div id="recaptcha" class="g-recaptcha" data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} data-size="invisible"></div>

        {#if submitStatus === 'error'}
            <div class="bg-red-900 bg-opacity-20 border border-red-500 text-red-500 px-4 py-3 rounded" role="alert">
                <p class="font-bold">Submission Failed</p>
                <p>{errorMessage}</p>
            </div>
        {/if}

        <button
            type="submit"
            disabled={submitStatus === 'submitting'}
            class="w-full py-3 bg-black border border-[#2e2e2e] text-gray-300 rounded-none hover:border-[#4CAF50] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center mx-auto"
            style="border:1px solid #2e2e2e; width: calc(100% + 30px); margin: 0 auto;"
        >
            {#if submitStatus === 'submitting'}
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
            {:else}
                SUBMIT
            {/if}
        </button>
        <div style="height:4px; width: 100%;"></div>
    </form>
{/if}

<style lang="scss">
    .form-label {
        display: block;
        font-size: 0.875rem;
        color: #999999;
        margin-bottom: 0.5rem;
    }

    .form-input {
        width: 100%;
        background-color: #000000;
        border: 1px solid #2e2e2e;
        color: #999999;
        padding: 0.75rem 1rem;
        border-radius: 0.25rem;
        transition: all 0.15s ease-in-out;

        &:hover {
            border-color: #4CAF50;
        }

        &:focus {
            outline: none;
            border-color: #4CAF50;
            box-shadow: 0 0 0 1px #4CAF50;
        }

        &::placeholder {
            color: #666666;
        }
    }

    .form-textarea {
        min-height: 120px;
        resize: vertical;
    }

    .form-checkbox {
        appearance: none;
        background-color: #000000;
        border: 1px solid #2e2e2e;
        border-radius: 0.25rem;
        width: 1rem;
        height: 1rem;
        margin-top: 0.2rem;
        transition: all 0.15s ease-in-out;

        &:checked {
            background-color: #4CAF50;
            border-color: #4CAF50;
            background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
        }

        &:hover {
            border-color: #4CAF50;
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 1px #4CAF50;
        }
    }

    select.form-input {
        appearance: none;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23999999' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 0.5rem center;
        background-repeat: no-repeat;
        background-size: 1.5em 1.5em;
        padding-right: 2.5rem;

        option {
            background-color: #000000;
            color: #999999;
        }

        optgroup {
            background-color: #000000;
            color: #999999;
            font-weight: 600;
        }
    }

    :global(.dark) {
        select.form-input option,
        select.form-input optgroup {
            background-color: #000000;
            color: #999999;
        }
    }

    .success-message {
        animation: fadeIn 0.5s ease-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .form-input:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .form-checkbox:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
</style>