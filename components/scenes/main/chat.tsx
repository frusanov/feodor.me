import { CardContent } from "@/components/CardContent";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Message } from "@/components/ui/message";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export function MainPageChat(props: any) {
  return (
    <>
      {/* <Card className="border-8 m-3 shadow-md w-[768px]" style={{ backgroundColor: 'rgba(255,255,255,0.5)'}}>
      <CardHeader>
        <CardTitle>You encounter an entity</CardTitle>
        <CardDescription>Entity open the dialog box</CardDescription>
      </CardHeader>
      <CardContent>

        

        <Textarea />
     
        <Button>
          Click me
        </Button>
      </CardContent>
    </Card> */}

      <div className="flex flex-col gap-4">
        <Message>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo natus sapiente consectetur rerum nisi debitis corrupti!
          </p>
        </Message>

        <Message>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate perspiciatis minus eligendi consequatur sapiente aliquam totam ab reiciendis odit impedit, eius dolorem deleniti architecto atque placeat nesciunt. Deserunt repellat eos debitis consequatur cupiditate, enim iure earum ipsa adipisci, numquam consequuntur culpa accusamus corrupti et eaque? Ducimus nam beatae voluptate sit eaque quidem, mollitia incidunt sint adipisci laudantium! Accusamus fugit laudantium facilis quam, beatae quis.
          </p>
        </Message>

        <Message>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo natus sapiente consectetur rerum nisi debitis corrupti!
          </p>
        </Message>

        <Textarea className="rounded-2xl bg-white bg-opacity-75" />

        <Button className="self-end">Send</Button>
      </div>
    </>
  )
}