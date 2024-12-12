import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function CardDefault({ image, title, content }) {
    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src={image}
                    alt={`image-${image}`}
                    className="w-full h-full"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography>
                    {content}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button>Meet Poors</Button>
            </CardFooter>
        </Card>
    );
}