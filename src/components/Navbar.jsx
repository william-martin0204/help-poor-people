import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Card,
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
                            Material Tailwind
                        </Typography>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-x-1">
                                <Button
                                    variant="text"
                                    size="lg"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Log In</span>
                                </Button>
                                <Button
                                    variant="gradient"
                                    size="lg"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Instant Donate</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
            <div className="mx-auto max-w-screen-md py-12">
                <Card className="mb-12 overflow-hidden">
                    <img
                        alt="nature"
                        className="h-[32rem] w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                    />
                </Card>
                <Typography variant="h2" color="blue-gray" className="mb-2">
                    What is Material Tailwind
                </Typography>
            </div>
        </div>
    )
}