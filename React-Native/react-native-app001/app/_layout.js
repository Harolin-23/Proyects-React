import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Slot, usePathname } from 'expo-router';
import { Link } from 'expo-router';

const Layout = () => {
    const [currentPath, setCurrentPath] = useState('');
    const pathname = usePathname();
    const [activeMenue, setActiveMenue] = useState(false);
    const menuAnimation = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

    useEffect(() => {
        Animated.timing(menuAnimation, {
            toValue: activeMenue ? 0 : 130,
            duration: 50,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    }, [activeMenue]);

    return (
        <View style={styles.container}>
            {currentPath !== '/' && (
                <View style={styles.header}>
                    <Link href='/pages/start' style={[styles.btnEdit]}>
                        <Text style={styles.txtBut}>
                            Inicio {currentPath === '/pages/start' && '•'}
                        </Text>
                    </Link>
                    <Link href='/pages/products' style={[styles.btnEdit]}>
                        <Text style={styles.txtBut}>
                            Products {currentPath === '/pages/products' && '•'}
                        </Text>
                    </Link>
                    <Link href='/pages/about' style={[styles.btnEdit]}>
                        <Text style={styles.txtBut}>
                            About {currentPath === '/pages/about' && '•'}
                        </Text>
                    </Link>
                    {
                        activeMenue ? (
                            <Text style={styles.icon} onPress={() => setActiveMenue(!activeMenue)}>≖</Text>
                        ) : (
                            <Text style={styles.icon} onPress={() => setActiveMenue(!activeMenue)}>≕</Text>
                        )
                    }
                </View>
            )}
            <View style={styles.content}>
                <Text style={styles.contentText}>Contenido</Text>
            </View>
            <Animated.View style={[styles.menu, { transform: [{ translateX: menuAnimation }] }]}>
                <Text style={styles.menuText}>Menu</Text>
            </Animated.View>
            <Slot />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        gap: 12,
        backgroundColor: '#2196f3',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        marginTop: 30,
        transition: 'all 0.3s ease',
    },
    headerText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    content: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s ease',
    },
    contentText: {
        fontSize: 16,
    },
    footer: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
    },
    btnEdit: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        transition: 'all 0.3s ease',
    },
    icon: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
    },
    menu: {
        position: 'absolute',
        top: 80,
        right: 0,
        width: 120,
        height: '100%',
        backgroundColor: '#494845',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection:'column',
        zIndex: 10,
    },
    menuText: {
        color: '#fff',
        fontSize: 20,
    },
});

export default Layout;
