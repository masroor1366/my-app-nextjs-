import React from "react";
import Avatar from "./Avatar";
import SidebarGroupTitle from "./SidebarGroupTitle";
import SidebarItem from "./SidebarItem";

const Navbar = () => {
  return (
    <dev id="sidebar_section">

{  /*  <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  
    
    <title>پنل ادمین</title>
    */
}
     
 

    <div className="mini_sidebar collapsedd bg-dark h-100">
      <ul className="p-0 m-0">

        <Avatar imgPath={"/assets/images/avatar/user2.jpg"} name={"محمدعلی مسرور"}  />
 
       
        <SidebarItem icon="fas fa-tachometer-alt" title="داشبورد"/>

        <SidebarGroupTitle title={"فروشگاه"}/>
       
          <SidebarItem icon="fas fa-stream" title="مدیریت گروه محصول"/>
          <SidebarItem icon="fas fa-cube" title="مدیریت محصول"/>
          <SidebarItem icon="fas fa-copyright"  title="مدیریت برندها"/>
          <SidebarItem icon="fab fa-pagelines" title="مدیریت گارانتی ها"/>
          <SidebarItem icon="fas fa-palette"  title="مدیریت رنگ ها"/>
          <SidebarItem icon="fas fa-percentage" title="مدیریت تخفیف ها"/>
      
       
 
        <SidebarGroupTitle title="سفارشات و سبد"/>
        <SidebarItem icon="fas fa-shopping-basket" title="مدیریت سبد ها"/>
        <SidebarItem icon="fas fa-luggage-cart" title="مدیریت سفارشات"/>
        <SidebarItem icon="fas fa-truck-loading" title="مدیریت نحوه ارسال"/>
  
        <SidebarGroupTitle title="کاربران و همکاران"/>
        <SidebarItem icon="fas fa-users" title="مشاهده کاربران"/>
        <SidebarItem icon="fas fa-user-tag" title="نقش ها"/>
        <SidebarItem icon="fas fa-shield-alt" title="مجوز ها"/>

        <SidebarGroupTitle title={"ارتباطات"}/>
        <SidebarItem item={"سوال ها"}/>
        <SidebarItem item={"نظرات "}/>
       
        
       
       
      </ul>
    </div>
    <script src="/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/js/chart.js"></script>
    <script src="/assets/js/main.js"></script>
  </dev>
  );
};

export default Navbar;