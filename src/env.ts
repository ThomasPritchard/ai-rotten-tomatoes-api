interface Config {
    Application: {
        PORT: number;
    };
    Google: {
        API_KEY: string;
    };
    OpenAi: {
        API_KEY: string;
    };
}

const ENV: Config = {
    Application: {
        PORT: Number(process.env.PORT),
    },
    Google: {
        API_KEY: process.env.GOOGLE_API_KEY as string,
    },
    OpenAi: {
        API_KEY: process.env.OPENAI_API_KEY as string,
    },
};

export default ENV;
