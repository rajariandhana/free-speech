import { Alert, Button, Textarea, addToast, Link } from "@heroui/react";
import { useState } from "react";

import environment from "../config/environment";
import instance from "../libs/axios/instance";

export const TweetForm = () => {
  const [loading, setLoading] = useState(false);
  const [textAreaError, setTextAreaError] = useState(false);
  const [textAreaErrorMessage, setTextAreaErrorMessage] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const [successAlert, setSuccessAlert] = useState(false);
  const [tweetLink, setTweetLink] = useState("");

  // 100 chars example
  // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  const handleTweet = async () => {
    setLoading(true);
    if (textAreaValue.trim().length === 0) {
      setTextAreaError(true);
      setTextAreaErrorMessage("Message cannot be empty");
      setLoading(false);
      return;
    } else if (textAreaValue.length > 250) {
      setTextAreaError(true);
      setTextAreaErrorMessage("Message cannot exceed 250 characters");
      setLoading(false);
      return;
    }

    setTextAreaError(false);
    setTextAreaErrorMessage("");

    try {
      const response = await instance.post("/tweet/linked-list/push", {
        "root_tweet_id": environment.ROOT_THREAD_ID,
        "text": textAreaValue,
      });
      // const response = await instance.post("/messages", {
      //   content: textAreaValue,
      // });
      console.log("Tweeted:", response.data);
      setTextAreaValue("");
      if (response.data.meta.status !== 200) {
        setTextAreaError(true);
        setTextAreaErrorMessage("Something went wrong...");
      }

      // let response = { data: { data: { data: { id: "XXX" } } } };
      setSuccessAlert(true);
      setTweetLink(
        `https://x.com/${environment.X_USERNAME}/status/${response.data.data.data.id}`
      );
    } catch (error) {
      console.error("Error tweeting:", error);
      setTextAreaError(true);
      setTextAreaErrorMessage("Something went wrong...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full items-end flex flex-col gap-4">
      <Textarea
        className="w-full"
        label="Your unhinged message"
        placeholder="I think that XXX should XXX..."
        isDisabled={loading}
        isRequired
        isInvalid={textAreaError}
        errorMessage={textAreaErrorMessage}
        value={textAreaValue}
        onValueChange={setTextAreaValue}
      />
      <Button
        isLoading={loading}
        color="primary"
        onPress={handleTweet}
        isDisabled={loading}
      >
        Tweet
      </Button>
      {successAlert && (
        <Alert
          color="success"
          title="Tweeted"
          // description={tweetLink}
        >
          <Link
            href={tweetLink}
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
          >
            check here
          </Link>
        </Alert>
      )}
    </div>
  );
};
