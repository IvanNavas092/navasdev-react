
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailJs from '@emailjs/browser';

// Componentes
import NewSection from '../../shared/about/NewSection';
import IconSkill from '../../shared/about/IconSkill';
import SectionCard from '../../shared/about/SectionCard';
import JobItem from '../../shared/about/JobItem';
import githubIcon from '../../assets/imgs/socialsIcons/github.svg'
import linkedinIcon from '../../assets/imgs/socialsIcons/linkedin.svg'
import gmailIcon from '../../assets/imgs/socialsIcons/gmail.svg'

// EmailJS configuration (Vite)
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

interface FormInput {
    type: 'text' | 'email' | 'textarea';
    label: string;
    placeholder: string;
    formName: string;
}

export default function AboutMe() {
    const { t } = useTranslation();

    const formRef = useRef<HTMLFormElement>(null);

    const [messageFinal, setMessageFinal] = useState('');
    const [sending, setSending] = useState(false);

    const skills: string[] = ['Angular', 'React', 'spring', 'django'];

    const skillsJob: string[] = ['Angular', 'jenkins', 'spring'];

    const itemsInput: FormInput[] = [
        {
            type: 'text',
            label: 'name',
            placeholder: 'placeholderName',
            formName: 'name',
        },
        {
            type: 'email',
            label: 'email',
            placeholder: 'placeholderEmail',
            formName: 'email',
        },
        {
            type: 'textarea',
            label: 'message',
            placeholder: 'placeholderMessage',
            formName: 'message',
        },
    ];

    const socials = [
        {
            src: linkedinIcon,
            alt: 'Linkedin',
            name: 'Linkedin',
            href: 'https://www.linkedin.com/in/navass/',
        },
        {
            src: githubIcon,
            alt: 'Github',
            name: 'Github',
            href: 'https://github.com/IvanNavas092/',
        },
        {
            src: gmailIcon,
            alt: 'Gmail',
            name: 'Gmail',
            href: 'mailto:navass21112@gmail.com',
        },
    ];

    const listOfExperience = [
        {
            title: 'job-title-better',
            date: 'job-date-better',
        },
        {
            title: 'job-title-man',
            date: 'job-date-man',
        },
    ];

    const listOfStudies = [
        {
            title: 'studie-title-dam',
            date: 'studie-date-dam',
        },
        {
            title: 'studie-title-smr',
            date: 'studie-date-smr',
        },
    ];

    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!formRef.current) return;

        setSending(true);
        setMessageFinal('');

        try {
            await emailJs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );

            setMessageFinal('message-sent');
            formRef.current.reset();

        } catch (error) {
            console.error('Error sending email:', error);
            setMessageFinal('message-error');

        } finally {
            setSending(false);
        }
    }

    return (
        <section
            className="relative overflow-y-hidden mt-2 mb-16 flex flex-col gap-2"
            id="contact"
        >
            {/* ===== FILA 1: Education + Experience ===== */}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center">

                {/* Education */}
                <div className="flex flex-col gap-2 md:col-span-6">
                    <NewSection
                        nameSection={t('studies')}
                    />

                    <SectionCard>
                        <div className="flex flex-col gap-1 text-sm md:text-base">
                            {listOfStudies.map((item, index) => (
                                <JobItem
                                    key={index}
                                    title={item.title}
                                    date={item.date}
                                />
                            ))}
                        </div>
                    </SectionCard>
                </div>

                {/* Experience */}
                <div className="flex flex-col gap-2 md:col-span-6">
                    <NewSection
                        nameSection={t('experience')}
                    />

                    <SectionCard>
                        <div className="flex flex-col gap-1 text-sm md:text-base">
                            {listOfExperience.map((item, index) => (
                                <JobItem
                                    key={index}
                                    title={item.title}
                                    date={item.date}
                                />
                            ))}
                        </div>
                    </SectionCard>
                </div>
            </div>

            <NewSection nameSection={t('about-me')} />

            {/* ===== RESTO ===== */}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">

                {/* LEFT SIDE: BIO + CONTACT */}

                <div className="flex flex-col gap-2 md:col-span-5">

                    {/* About me */}
                    <SectionCard title={t('bio')}>
                        <p className="text-sm md:text-base font-light">
                            {t('about-me-text')}
                        </p>
                    </SectionCard>

                    {/* Contact */}
                    <NewSection nameSection={t('contact')} />

                    <SectionCard>
                        <div className="grid grid-cols-2">

                            {/* Form */}
                            <form
                                ref={formRef}
                                onSubmit={submitForm}
                                className="flex flex-col"
                            >
                                {itemsInput.map((item) => (
                                    <div className="flex flex-col" key={item.formName}>
                                        <label
                                            htmlFor={item.formName}
                                            className="text-base font-semibold"
                                        >
                                            {t(item.label)}
                                        </label>

                                        {item.type !== 'textarea' ? (
                                            <input
                                                id={item.formName}
                                                type={item.type}
                                                name={item.formName}
                                                required
                                                placeholder={t(item.placeholder)}
                                                className="border text-sm md:text-base border-[var(--font-first-color)] p-2 rounded-lg mt-1 mb-2 placeholder:text-gray-500 font-light"
                                            />
                                        ) : (
                                            <textarea
                                                id={item.formName}
                                                name={item.formName}
                                                required
                                                placeholder={t(item.placeholder)}
                                                className="border text-sm md:text-base border-[var(--font-first-color)] p-2 rounded-lg mt-1 mb-2 placeholder:text-gray-500 font-light"
                                            />
                                        )}
                                    </div>
                                ))}

                                {messageFinal && (
                                    <p className="text-sm md:text-base font-light">
                                        {t(messageFinal)}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="border border-[var(--font-first-color)] text-[var(--font-first-color)] hover:text-[var(--font-second-color)] p-2 rounded-full mt-2 mb-2 cursor-pointer bg-transparent hover:border-[var(--theme-color)] font-semibold hover:scale-101 transition-all duration-300 disabled:opacity-50"
                                >
                                    {sending ? '...' : t('send')}
                                </button>
                            </form>

                            {/* Social icons */}
                            <div className="flex flex-col gap-2 justify-center items-center">
                                {socials.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex flex-col items-center gap-1"
                                    >
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-8 h-8 hover:scale-125 transition-transform duration-300 cursor-pointer"
                                        />

                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </SectionCard>
                </div>

                {/* RIGHT SIDE: SKILLS + TESTIMONIALS + CURRENT FOCUS */}

                <div className="md:col-span-7 space-y-2">

                    <div className="flex flex-col md:flex-row gap-2">

                        {/* Testimonials */}
                        <SectionCard title={t('testimonials')}>
                            <div className="p-4 border border-[#828282]/40 rounded-2xl">
                                <p className="italic text-sm md:text-base font-light">
                                    "{t('testimonial')}"
                                </p>
                            </div>
                        </SectionCard>

                        {/* Skills */}
                        <SectionCard title={t('skills')}>
                            <div className="flex flex-wrap gap-1">
                                {skills.map((util) => (
                                    <IconSkill
                                        key={util}
                                        util={util}
                                    />
                                ))}
                            </div>
                        </SectionCard>
                    </div>

                    {/* Current focus */}
                    <NewSection nameSection={t('current-occupation')} />

                    <SectionCard>
                        <div className="gap-6 items-center">
                            <div className="space-y-2">

                                <div className="flex flex-col md:flex-row gap-2 items-start justify-between">

                                    <h1 className="bebas text-2xl font-bold md:text-3xl">
                                        {t('job-title-better')}
                                    </h1>

                                    <div className="flex gap-2 items-center">
                                        {skillsJob.map((util) => (
                                            <IconSkill
                                                key={util}
                                                util={util}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <span className="text-[var(--font-second-color)] text-sm mb-1 font-light">
                                    {t('job-date-better')}
                                </span>

                                <p className="whitespace-pre-line">
                                    {t('job-point-1')}
                                </p>
                            </div>
                        </div>
                    </SectionCard>
                </div>
            </div>
        </section>
    );
}
