interface User {
    id: number;
    name: string;
    email: string;
    googleId? : string;
    // startTrail : () => string;
    startTrail(): string;
    getCoupon(couponName: string, value: number): number;
};

const rohan : User = {
    id: 1, 
    name: "Rohan",
    email: "email@email.com",
    googleId: "1234567890", 
    startTrail: () => {
      return "trial started";
    },
    getCoupon: (name: "newUser", off: 20) => {
        return 20;
    }
    
};