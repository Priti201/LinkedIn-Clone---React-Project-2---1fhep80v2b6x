import React from "react";
import { PostMarginContainer, PostPara, PostUserDetails, SinglePost } from "../Styles/Style";
import UserImage from "../userImage/UserImage";
import { MdPublic } from "react-icons/md";
import Carousel from "react-material-ui-carousel";
import DisplayReactions from "../Home/post/DisplayReactions";
import ReactionsAndComments from "../Home/post/ReactionsAndComments";

const PostContainer = ({ posts }) => {
    console.log('post', posts);
    const Item = (props) => {
        return <img src={props.img} alt="image" width={"100%"} height={"350px"} />;
      };
  return (
    <div>
      {posts?.map((item) => {
        let date = new Date(item.createdAt).getHours();
        return (
          <SinglePost key={item.author.createdAt}>
            <PostMarginContainer>
              <UserImage
                userImageStyling={{
                  width: 35,
                  height: 35,
                  marginTop: "2px",
                  backgroundColor: "green",
                  color: "white !important",
                  fontSize: 12,
                }}
              />
              <PostUserDetails>
                <h4>{item.author.name}</h4>
                <p>
                  {date}hrs •{" "}
                  <span>
                    <MdPublic />
                  </span>
                </p>
              </PostUserDetails>
            </PostMarginContainer>

            <PostPara>{item.content}</PostPara>
            <Carousel
              autoPlay={false}
              animation={"slide"}
              cycleNavigation={false}
            >
              {item?.images?.map((img) => (
                <Item img={img} />
              ))}
            </Carousel>
            <DisplayReactions
              props={{ likes: item.likeCount, comments: item.commentCount }}
            />
            <ReactionsAndComments
              props={{ likes: item.likeCount, postId: item._id }}
            />
          </SinglePost>
        );
      })}
    </div>
  );
};

export default PostContainer;
