interface Config {
    Application: {
        PORT: number;
    };
    OpenAi: {
        API_KEY: string;
    };
}

const ENV: Config = {
    Application: {
        PORT: Number(process.env.PORT),
    },
    OpenAi: {
        API_KEY: process.env.OPENAI_API_KEY as string,
    },
};

export default ENV;
