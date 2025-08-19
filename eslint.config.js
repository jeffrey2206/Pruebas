
export default[
    {
        files: ['**/*.js'],
        languageOptions:{
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            semi: ['error', 'a'],
            quotes: ['error', 'single'],
        },
    }
];