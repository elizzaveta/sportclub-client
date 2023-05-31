declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            email: string;
            roleId: number;
            token: string;
        };
    }
}