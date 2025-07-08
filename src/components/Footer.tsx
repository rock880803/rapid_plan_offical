import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const socialLinks = [
    { icon: faGithub, href: 'https://github.com/rock880803', label: 'GitHub' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/rapid-plan/', label: 'LinkedIn' },
    { icon: faInstagram, href: 'https://www.instagram.com/rapid.plan_offical/?next=%2F', label: 'Instagram' },
    { icon: faLine, href: 'https://lin.ee/KPpHUTJ', label: 'Line' },
    { icon: faEnvelope, href: 'https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 glow-subtitle">聯絡我</h3>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 glow-icon"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 glow-text">
            © 2025 個人作品集. 保留所有權利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;