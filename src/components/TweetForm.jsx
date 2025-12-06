import { Button, Textarea } from "@heroui/react";
import { useState } from "react";

export const TweetForm = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full items-end flex flex-col gap-4">
      <Textarea className="w-full" label="Your unhinged message" placeholder="I think that XXX should XXX..."/>
      <Button isLoading={loading} color="primary" >Tweet</Button>
    </div>
  )
};