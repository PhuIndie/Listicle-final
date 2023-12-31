'use client'
import useIsMobile from '@/hooks/useIsMobile';
import styles from './styles.module.scss'
import Image from 'next/image';
import { useContext, useState } from 'react';
import { ModalContext } from '@/app/providers';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@/hooks/useUser';

function Header() {
    const { authenticated } = useUser();
    const { setModalOpen } = useContext(ModalContext);
    const [showMenu, setShowMenu] = useState(false);
    const { isMobile } = useIsMobile();
    const path = usePathname();

    const actions = authenticated ? [
        {
            title: 'Home',
            route: '/home'
        },
        {
            title: 'Favorites',
            route: '/favorites'
        },
        {
            title: 'Settings',
            route: '/settings'
        },
    ] : [
        {
            title: 'About',
            route: '/#about'
        },
        {
            title: 'FAQ',
            route: '/faq'
        }, 
    ]


    const onMenuClick = () => {
        setShowMenu(s => !s)
    }

    return (
        <div className={styles.header}>
            {/* Logo */}
            <Link href="/">
                <div className={styles.logoContainer}>
                    <Image src='/logo.png' width={40} height={40} alt='Listicle Logo' />
                    <h2>Listicle</h2>
                </div>
            </Link>

            {isMobile === null ? (
                <div />
            ) : isMobile ? (
                <Image onClick={onMenuClick} src="/menu.png" width={40} height={40} alt="Menu" />
            ) : (
                <>
                    {/* Actions */ }
                    <div className={styles.actionsContainer}>
                        {actions.map(action => (
                            <Link key={action.title} href={action.route}>
                                <h3 className={`${styles.action} ${path === action.route ? styles.activePage : ''}`}>{action.title}</h3>
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    {authenticated ? (
                        <Link href={'/new-listing'}>
                            <div className={styles.cta}>
                                <span>
                                    <h3>Add new listing</h3>
                                </span>
                            </div>
                        </Link>
                    ) : (
                        <div className={styles.cta}>
                            <h3 onClick={() => setModalOpen('login')}>Sign in</h3>
                            <span onClick={() => setModalOpen('signup')}>
                                <h3>Create an account</h3>
                            </span>
                        </div>
                    )}
                </>
            )}
            
            {showMenu && (
                <div className={styles.mobileMenu}>
                    <div className={styles.actionsContainer}>
                        {actions.map(action => (
                            <Link key={action.title} href={action.route}>
                                <h3 className={styles.action}>{action.title}</h3>
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    {authenticated ? (
                        <Link href={'/new-listing'}>
                            <div className={styles.cta}>
                                <span>
                                    <h3>Add new listing</h3>
                                </span>
                            </div>
                        </Link>
                    ) : (
                        <div className={styles.cta}>
                            <h3 className={styles.signin} onClick={() => setModalOpen('login')}>Sign in</h3>
                            <span onClick={() => setModalOpen('signup')}>
                                <h3>Create an account</h3>
                            </span>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Header;