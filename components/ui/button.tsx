'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    href?: string;
    icon?: ReactNode;
    className?: string; // Allow overriding classes
}

export default function Button({
    children,
    variant = 'primary',
    href,
    icon,
    className = '',
    ...props
}: ButtonProps) {
    // Styles based on variant
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    background: 'linear-gradient(135deg, #846ef7 0%, #1e0b74 100%)',
                    boxShadow: '0 0 30px rgba(132, 110, 247, 0.4)',
                    border: 'none',
                    color: '#fff',
                };
            case 'secondary':
                return {
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    boxShadow: 'none',
                };
            case 'outline':
                return {
                    background: 'transparent',
                    border: '1px solid rgba(132, 110, 247, 0.5)',
                    color: '#fff',
                    boxShadow: 'none',
                };
            case 'ghost':
                return {
                    background: 'transparent',
                    border: 'none',
                    color: '#9CA3AF',
                    boxShadow: 'none',
                };
            default:
                return {};
        }
    };

    const baseClasses = `inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${className}`;

    if (href) {
        return (
            <Link href={href}>
                <motion.div
                    className={baseClasses}
                    style={getVariantStyles()}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: variant === 'primary' ? '0 0 50px rgba(132, 110, 247, 0.6)' : undefined,
                        backgroundColor: variant === 'secondary' ? 'rgba(255, 255, 255, 0.1)' : undefined
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    {children}
                    {icon && <span className="shrink-0">{icon}</span>}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.button
            className={baseClasses}
            style={getVariantStyles()}
            whileHover={{
                scale: 1.05,
                boxShadow: variant === 'primary' ? '0 0 50px rgba(132, 110, 247, 0.6)' : undefined,
            }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
            {icon && <span className="shrink-0">{icon}</span>}
        </motion.button>
    );
}
