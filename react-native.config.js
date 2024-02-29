module.exports = {
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                ios: null,
            },
        },
    },
    project: {
        android: {
            unstable_reactLegacyComponentNames: [],
        },
        ios: {
            unstable_reactLegacyComponentNames: [
                // 'react-native-confirmation-code-field',
                // 'react-native-parallax-scroll-view',
                // 'react-native-progress',
                // 'react-native-reanimated-carousel',
                // 'react-native-root-toast',
                // 'react-native-switch-selector',
                // 'react-native-tab-view',
                // 'react-native-typography'
            ],
        },
    },
};
