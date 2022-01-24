module.exports = ({ env }) => ({
    upload: {
        provider: 'firebase-storage',
        providerOptions: {
            serviceAccount: JSON.parse(env("SERVICE_ACCOUNT_KEY")),
            bucketUrl: env("STORAGE_BUCKET_URL"),
            uploadOptions: {},
            deleteOptions: {},
        }
    }
})