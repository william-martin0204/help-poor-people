"use client"
import {
    Navbar,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function StickyNavbar() {
    return (
        <div>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 lg:py-4">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            Donate for Poors!
                        </Typography>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-x-1">
                                <Button
                                    variant="text"
                                    size="lg"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Meet Poors</span>
                                </Button>
                                <Button
                                    variant="gradient"
                                    size="lg"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Donate</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
            <div className="container mx-auto">
                <Typography variant="h2" color="blue-gray" className="mb-2 mt-3 text-center">
                    Let’s donate and spread kindness together.
                </Typography>
                <Typography variant="lead" color="blue-gray">
                    No matter the amount, every contribution holds immense value. Even the smallest donation can create a ripple of change, providing food, warmth, and hope to those in need. It’s not about how much you give but the kindness behind it that truly matters. Together, our small acts of generosity can add up to something extraordinary, proving that compassion has the power to transform lives.
                </Typography>
                <div className="flex justify-center mt-4">
                    <Button color="green" size="lg" className="rounded-full">Instant Donate</Button>
                </div>
            </div>
        </div>
    )
}