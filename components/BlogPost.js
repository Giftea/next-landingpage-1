import React from "react";
import Link from "next/link";
import Image from 'next/image'

const BlogPost = (props) => {
  return (
    <div className="single-blog-inner">
      <div className="post-image">
        <Link href='#'>
          <a>
            <Image src={props.postImage} alt="" />
          </a>
        </Link>

        <div className="post-date">
          <p>
            <span>{props.postDate}</span>
            {props.postMonth}
          </p>
        </div>
      </div>

      <div className="post-content">
        <div className="post-details">
          <div className="post-info d-flex">
            <Link href='#'>
              <a>
                <span>By</span>
                {props.postAuthor}
              </a>
            </Link>
            <Link href='#'>
              <a>
                <span>{props.postCommentCount}</span> Comment
              </a>
            </Link>
          </div>

          <div className="post-title">
            <h3>
              <Link href='#'>
                <a>{props.postTitle}</a>
              </Link>
            </h3>
          </div>
          <p>{props.postContent}</p>
          <Link href='#'>
            <a className={props.btnClass}>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
