import React from "react";
import Creview from "./review";

function Review() {
  return (
    <div className="pt-[45px] pb-[30px] bg-gray-100">
      <div className="container px-5  mx-auto ">
       <div className="">
       <div>
          <h1 className="font-bold text-[20px] flex justify-center">Words from our customers</h1>
        </div>
        <div className="flex items-center sm:justify-around sm:flex-row flex-col pt-6">
         <Creview img="https://media.istockphoto.com/photos/smiling-young-female-entrepreneur-working-on-a-laptop-at-home-picture-id871802194?b=1&k=20&m=871802194&s=170667a&w=0&h=UbtEWxBa5odocS0xaAQLrl-s94WVTsZrzDBB_L4cWvI=" emoji="😃" name="Nessi" location="Brokiya, NY" />
         <Creview img="https://previews.123rf.com/images/baranq/baranq1603/baranq160300831/53957368-happy-man-sitting-at-desk-in-the-office.jpg" emoji="😍" name="David" location="Los Angeles, CA" />
         <Creview img="https://us.123rf.com/450wm/tomwang/tomwang1606/tomwang160600069/58487764-young-beautiful-business-woman-working-in-office.jpg?ver=6" emoji="😘" name="Jenny" location="New York, NY" />
        </div>
       </div>
      </div>
    </div>
  );
}

export default Review;
