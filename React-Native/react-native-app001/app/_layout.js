import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Slot, usePathname } from 'expo-router';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const Layout = () => {
    const [currentPath, setCurrentPath] = useState('');
    const pathname = usePathname();
    const [activeMenue, setActiveMenue] = useState(false);
    const menuAnimation = useRef(new Animated.Value(200)).current;

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

    useEffect(() => {
        Animated.timing(menuAnimation, {
            toValue: activeMenue ? 0 : 220,
            duration: 120,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    }, [activeMenue, menuAnimation]);

    return (
        <View style={styles.container}>
            {currentPath !== '/' && (
                <View style={styles.header}>
                    <Link href='/pages/start' style={[styles.btnEdit]}>
                        <Text style={styles.txtBut}>
                            Inicio {currentPath === '/pages/start' &&    <Ionicons name="ellipse" size={15} color="white" />}
                        </Text>
                    </Link>
                    <Link href='/pages/products' style={[styles.btnEdit]}>
                        <Text style={styles.txtBut}>
                            Products {currentPath === '/pages/products' &&  <Ionicons name="ellipse" size={15} color="white" />}
                        </Text>
                    </Link>
                    <Link href='/pages/about' style={[styles.btnEdit]}>
                        <Text style={styles.txtBut}>
                            About {currentPath === '/pages/about' &&  <Ionicons name="ellipse" size={15} color="white" />}
                        </Text>
                    </Link>
                    {
                        activeMenue ? (
                            <Text style={styles.icon} onPress={() => setActiveMenue(!activeMenue)}>
                                  <Ionicons name="grid" size={25} color="white" />
                            </Text>
                        ) : (
                            <Text style={styles.icon} onPress={() => setActiveMenue(!activeMenue)}>
                                  <Ionicons name="grid-outline" size={25} color="white" />
                            </Text>
                        )
                    }
                </View>
            )}
    
            <Animated.View style={[styles.menu, { transform: [{ translateX: menuAnimation }] }]}>
                <View style={styles.menuText}>
                    <View style={styles.containerIconsMenue}>
                        <Text style={styles.textM}><Ionicons name="folder-open-outline" size={20} color="white" />   Customizes</Text>
                    </View>
                    <View>
                        <Text style={styles.textM}><Ionicons name="settings-outline" size={20} color="white" />   Config</Text>
                    </View>
                    <View>
                        <Text style={styles.textM}><Ionicons name="cart-outline" size={20} color="white" />   Cart</Text>
                    </View>
                    <View>
                        <Text style={styles.textM}><Ionicons name="ellipsis-vertical" size={20} color="white" />   More</Text>
                    </View>

                </View>
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
        backgroundColor: 'rgba(33, 150, 243, 0.8)', // Semi-transparent background
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        marginTop: 30,
        transition: 'all 0.3s ease',
        shadowColor: '#000',
        shadowOffset: { width: -10, height: -10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        backdropFilter: 'blur(10px)', // Blur effect
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
        width: 220,
        height: '100%',
        backgroundColor: '#2196f3',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 10,
        shadowColor: '#000',
        shadowOffset: { width: -10, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        paddingTop: 20,
        gap: 20,
    },
    menuText: {
        color: '#fff',
        fontSize: 20,
        flexDirection: 'column',
        gap: 20
    },
    textM: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerIconsMenue: {
        flexDirection: 'row',
        gap: 20,
        width: 'auto',
    },
});



export default Layout;
