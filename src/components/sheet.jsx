import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { getUserFollowers, getUserFollowing } from "@/services/api-service"
import { useEffect, useState } from "react"
import { Cover } from "@/components/cover"
import { Footer } from "./Footer"

export function SheetDemo({ title, params }) {
    const [list, setList] = useState(null)

    useEffect(() => {
        const fetchdata = async () => {
            try {
                if (title === "Followers") {
                    const { data } = await getUserFollowers(params)
                    setList(data)
                }
                else if ((title === "Following")) {
                    const { data: ree } = await getUserFollowing(params)
                    setList(ree)
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchdata()
    }, [])


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="border-0 text-xl" >{title}</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{title} List:</SheetTitle>
                </SheetHeader>
                <div className="grid gap-1 py-1 max-h-screen overflow-y-auto mt-2 scroll-auto bg-scroll ">
                    {
                        list?.map((e, index) => <Cover key={index} data={e} />)
                    }

                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Footer />
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
