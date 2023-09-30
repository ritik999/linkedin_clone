import React, { useEffect, useState } from "react";
import "./feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import Post from "./Post";
import { db } from "../firebase/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore/lite";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

type PostType = {
  id: string;
  data: {
    name: string;
    description: string;
    message: string;
    photoUrl: string;
  };
};

const Feed = () => {
  const [input, setInput] = useState<string>("");
  const [post, setPosts] = useState<PostType[]>([]);
  const { user } = useSelector((state: any) => state.custom);

  const citiesCol = collection(db, "posts");
  console.log(user);


  const getData = async () => {
    const citySnapshot = await getDocs(citiesCol);
    setPosts(
      citySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  };

  useEffect(() => {
    getData();
    // data.then((res)=>console.log(res)).catch(e=>console.log(e));

    // db.collection("posts").onSnapshot((snapshot: any) =>
    //   setPosts(
    //     snapshot.docs.map((doc: any) => ({
    //       id: doc.id,
    //       data: doc.data(),
    //     }))
    //   )
    // );
  }, []);

  const sendPost = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const newData = await addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: "this is a test",
      message: input,
      photoUrl: "",
    });

    console.log("run");
    setInput("");
    console.log("clear");
    getData();

    // collection(db,'posts').add({
    //   name: "Ritik Upadhyay",
    //   description: "this is a test",
    //   message: input,
    //   photoUrl: "",
    // })

    // db.collection("posts").add({
    //   name: "Ritik Upadhyay",
    //   description: "this is a test",
    //   message: input,
    //   photoUrl: "",
    //   // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewMonthIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {post.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
          />
        ))}
      </FlipMove>

      {/* <Post
        name="Ritik Upadhyay"
        description="This is a test"
        message="WOW this worked"
      /> */}
    </div>
  );
};

export default Feed;
