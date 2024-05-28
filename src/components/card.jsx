import { BellRing, Check, Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { useEffect, useState } from "react"
import { getUserLanguage } from "@/services/api-service"

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]


export function CardDemo({ repo, username }) {
    const [lang, setLang] = useState('');

    useEffect(() => {
        const fetchdata = async () => {

            try {
                const { data } = await getUserLanguage(username, repo.name)
                setLang(data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchdata()
    }, [])
    console.log(repo)
    return (
        <Card className="w-96">
            <CardHeader>
                <CardTitle>{repo.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md ">

                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Total Stars
                        </p>
                        <p className="text-3xl text-blue-500 text-muted-foreground px-4">
                            {repo.stargazers_count}
                        </p>
                    </div>
                    <Star className="text-blue-700" />
                </div>
                <div className="flex gap-2">
                    <span className="flex h-2 w-2 translate-y-2 rounded-full bg-sky-500" />
                    {Object.keys(lang).length>0?Object.keys(lang).join(", "):"Other"}
                </div>
            </CardContent>
            <CardFooter>
                <a className="w-full" href={repo.html_url}>
                    <Button className="w-full">
                        <Check className="mr-2 h-4 w-4" /> Visit
                    </Button>
                </a>
            </CardFooter >
        </Card >
    )
}
