import Image from 'react-bootstrap/Image';
import styles from "../page.module.css";


// import "./css/all.min.css";
import "@/public/assets/cssResume/Fonts.css";
import "@/public/assets/cssResume/credit-header.css";
import "@/public/assets/cssResume/DefaultResume-RTL.css";
import "@/public/assets/cssResume/Template37-RTL.css";
 


 

 
export default function Home() {
  return (


    
      
       

      <div className="container"  >
       
      <div className="contact-info">
           <div className="contact-head">
               <div className="name-job-desc">
                  <div className="user-image" >
                  
                  
                   

                   <Image src="./user2.jpg"  width={150}
                   height={160} rounded />
                  
             
                   
               
               
                   </div>
                   <h1>محمدعلی مسرور</h1>
                  <div className="infoo info" data-section="Contact">
  <div className="infoo-head">
      <label>اطلاعات تماس</label>
  </div>

          <div className="contact-item contact__email">
              <span>
                  <i className="fa fa-envelope"></i>
              </span>
              <span>ایمیل:</span>
              <span>
                  <a href="mailto:Masroor.1388@gmail.com">Masroor.1388@gmail.com</a>
              </span>
          </div>
  <div className="contact-item contact__mobile">
              <span>
                  <i className="fa fa-mobile-alt"></i>
              </span>
              <span>موبایل:</span>
                                         <span dir="ltr">(+98)9120270308</span>
   </div>
          <div className="contact-item contact__city">
              <span>
                  <i className="fas fa-map-marker"></i>
              </span>
              <span>آدرس:</span>
              <span>تهران، ونک، آرارات</span>
          </div>
</div>
                  <div className="other-infos not-drag">
  
          <div className="basic__birthday">
              <span>متولد:</span>
                      <span>1367/1/1</span>                        
          </div>


          <div className="basic__military">
              <span>وضعیت سربازی:</span>
              <span>پایان خدمت</span>
          </div>
  
</div>

              </div>
          </div>                      
      </div>
      <div className="row">

          <div className="one-col-layout sortable-cv-items">

                  <h2 className="headline">برنامه نویس وب</h2>


  <div className="property-item basic__about" data-section="About">
      <div className="property-item_head">            
          <span>
              <i className="fa fa-user"></i>
          </span>
          <label>خلاصه رزومه</label>            
      </div>
      <div className="property-item_body">
          <p className="about-us">برنامه نویس وب با تجربه بیش از 9 سال در توسعه و پیاده‌سازی وبسایت‌ها و برنامه‌های تحت وب هستم. تسلط کامل بر زبان‌های برنامه‌نویسی مانند HTML، CSS و JavaScript را دارم. تجربه کار با فریمورک‌های مختلف مانند React و Next را به دست آورده‌ام. ضمناً مهارت‌های برنامه‌نویسی سمت سرور را نیز دارم و با زبان‌های مانند Java و Node و Python آشنایی دارم. علاقمند به یادگیری فناوری‌های جدید و حل مسائل پیچیده هستم.</p>                
      </div>
  </div>

  <div className="property-item education__list" data-section="Education">
      <div className="property-item_head">
          <span>
              <i className="fa fa-graduation-cap"></i>
          </span>
          <label>
              سوابق تحصیلی
          </label>

      </div>
      <div className="property-item_body">
          <ul className="history multi-line">
                  <li className="has-date">
                      <h2 className="subtitle">
                          کارشناسی ارشد 
                          مهندسی فناوری اطلاعات
                      </h2>
                      <h3 className="subtitle">گرایش: تجارت الکترونیک</h3>
                              <h3 className="subtitle">موسسه/دانشگاه: دانشگاه آزاد اسلامی <label>آزاد</label></h3>
                          <label className="date">۱۳۹۳ -  ۱۳۹۶</label>
                  </li>
                  <li className="has-date">
                      <h2 className="subtitle">
                          کارشناسی 
                          مهندسی کامپیوتر
                      </h2>
                      <h3 className="subtitle">گرایش: فناوری اطلاعات</h3>
                              <h3 className="subtitle">موسسه/دانشگاه: دانشگاه پیام نور قشم <label>پیام نور</label></h3>
                          <label className="date">۱۳۸۷ -  ۱۳۹۱</label>
                  </li>
          </ul>
      </div>
  </div>

  <div className="property-item experience__list" data-section="Experience">
      <div className="property-item_head">
          <span>
              <i className="fa fa-toolbox"></i>
          </span>
          <label>
              سوابق شغلی
          </label>
      </div>
      <div className="property-item_body">
          <ul className="history multi-line">
                      <li className="1220 has-date">
                          <h2 className="subtitle">توسعه دهنده وب</h2>
                              <h3 className="subtitle">
                                  نهاد دولتی
                              </h3>


                              <label className="date">مهر 1393 - اکنون</label>
                              <label className="exp-desc-title">وظایف و دستاوردها</label>
                              <ul className="exp-desc">
                                          <li>پیاده‌سازی و توسعه وبسایت‌های داینامیک و پویا با استفاده از HTML، CSS و JavaScript</li>
                                          <li>طراحی وبسایت‌های ریسپانسیو و سازگار با مرورگرهای مختلف</li>
                                          <li>برنامه‌نویسی سمت سرور با استفاده از React و فریمورک Next </li>
                                          <li>پیاده‌سازی و ادغام سیستم‌های پرداخت الکترونیکی</li>
                                          <li>تجربه کار با پایگاه داده‌های رابطه‌ای و استفاده از Oracle برای مدیریت داده‌ها</li>
                              </ul>
                      </li>
                      <li className="58666 has-date">
                          <h2 className="subtitle"> برنامه‌نویس Android</h2>
                              <h3 className="subtitle">
                                 نهاد دولتی  
                              </h3>


                              <label className="date">خرداد 1397 - اسفند 1398</label>
                              <label className="exp-desc-title">وظایف و دستاوردها</label>
                              <ul className="exp-desc">
                                          <li>طراحی و توسعه برنامه‌های اندروید با استفاده از Java </li>
                                          <li>طراحی و پیاده سازی شبکه اجتماعی</li>
                                     
                              </ul>
                      </li>
                      <li className="58668 has-date">
                          <h2 className="subtitle">  مسئول انفورماتیک</h2>
                              <h3 className="subtitle">
                                دانشگاه پیام نور قشم
                              </h3>

                              <h3 className="subtitle full-address">قشم</h3>

                              <label className="date">دی 1387 - اردیبهشت 1391</label>
                              <label className="exp-desc-title">وظایف و دستاوردها</label>
                              <ul className="exp-desc">
                                          <li>طراحی و پیاده سازی شبکه های کامپیوتری دانشگاه</li>
                                          <li>تنظمات فیلترینگ سایت ها و برقراری امنیت شبکه با استفاده از میکروتیک</li>
                                        
                              </ul>
                      </li>
          </ul>
      </div>
  </div>

  <div className="property-item skill__list" data-section="Skill">
      <div className="property-item_head">
          <span>
              <i className="fa fa-lightbulb"></i>
          </span>

          <label>
              مهارت‌ها
          </label>

      </div>
      <div className="property-item_body">
          <div className="bar-progress item-row w0">
              <ul className="history">
                   
                      <li className="skill-item">
                          <span>
                              <label>JavaScript </label>
                                  <label className="grade">
                                      <small>100%</small>
                                          <i className="tik"></i>
                                          <i className="tik"></i>
                                          <i className="tik"></i>
                                          <i className="tik"></i>
                                          <i className="tik"></i>
                                  </label>
                          </span>
                      </li>
                      <li className="skill-item">
                          <span>
                              <label>React </label>
                                  <label className="grade">
                                      <small>100%</small>
                                          <i className="tik"></i>
                                          <i className="tik"></i>
                                          <i className="tik"></i>
                                          <i className="tik"></i>
                                          <i></i>
                                  </label>
                          </span>
                      </li>
                     
                      <li className="skill-item">
                          <span>
                              <label>NextJS </label>
                                  <label className="grade">
                                      <small>100%</small>
                                          <i className="tik"></i>
                                          <i className="tik"></i>
                                          <i className="tik"></i>
                                          <i className="tik"></i>
                                          <i className="tik"></i>
                                  </label>
                          </span>
                      </li>

                      <li className="skill-item">
                  <span>
                      <label>NodeJS </label>
                          <label className="grade">
                              <small>50%</small>
                                  <i className="tik"></i>
                                  <i className="tik"></i>
                                  <i className="tik"></i>
                                  <i className="tik"></i>
                                  <i className="tik"></i>
                          </label>
                  </span>
              </li>

              
              <li className="skill-item">
              <span>
                  <label>تجزیه و تحلیل </label>
                      <label className="grade">
                          <small>100%</small>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i></i>
                      </label>
              </span>
          </li>

              <li className="skill-item">
              <span>
                  <label>Oracle </label>
                      <label className="grade">
                          <small>80%</small>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i></i>
                      </label>
              </span>
          </li>

          
          <li className="skill-item">
              <span>
                  <label>plsql </label>
                      <label className="grade">
                          <small>80%</small>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                      </label>
              </span>
          </li>

          
          <li className="skill-item">
              <span>
                  <label>Android </label>
                      <label className="grade">
                          <small>80%</small>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                      </label>
              </span>
          </li>

          <li className="skill-item">
              <span>
                  <label>Java </label>
                      <label className="grade">
                          <small>60%</small>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                              <i className="tik"></i>
                      </label>
              </span>
          </li>

                      <li className="skill-item">
                      <span>
                          <label>Python </label>
                              <label className="grade">
                                  <small>60%</small>
                                      <i className="tik"></i>
                                      <i className="tik"></i>
                                      <i className="tik"></i>
                                      <i className="tik"></i>
                                      <i className="tik"></i>
                              </label>
                      </span>
                  </li>

                  



              </ul>

          </div>
          <div className="circle-progress">
              <div className="circle-progress__item">
                  <ul className="history">
                          <li>
                              <div className="c100 p100 small">
                                  <span>100%</span>
                                  <div className="slice">
                                      <div className="bar"></div>
                                      <div className="fill"></div>
                                  </div>
                                  <div className="circle-progress__title">برنامه نویسی دات نت</div>
                              </div>
                          </li>
                          <li>
                              <div className="c100 p100 small">
                                  <span>100%</span>
                                  <div className="slice">
                                      <div className="bar"></div>
                                      <div className="fill"></div>
                                  </div>
                                  <div className="circle-progress__title">JavaScript</div>
                              </div>
                          </li>
                          <li>
                              <div className="c100 p80 small">
                                  <span>80%</span>
                                  <div className="slice">
                                      <div className="bar"></div>
                                      <div className="fill"></div>
                                  </div>
                                  <div className="circle-progress__title">React</div>
                              </div>
                          </li>
                          <li>
                              <div className="c100 p80 small">
                                  <span>80%</span>
                                  <div className="slice">
                                      <div className="bar"></div>
                                      <div className="fill"></div>
                                  </div>
                                  <div className="circle-progress__title">تجزیه و تحلیل</div>
                              </div>
                          </li>
                          <li>
                              <div className="c100 p80 small">
                                  <span>80%</span>
                                  <div className="slice">
                                      <div className="bar"></div>
                                      <div className="fill"></div>
                                  </div>
                                  <div className="circle-progress__title">NoSQL</div>
                              </div>
                          </li>
                          <li>
                              <div className="c100 p100 small">
                                  <span>100%</span>
                                  <div className="slice">
                                      <div className="bar"></div>
                                      <div className="fill"></div>
                                  </div>
                                  <div className="circle-progress__title">#C</div>
                              </div>
                          </li>
                          <li>
                              <div className="c100 p100 small">
                                  <span>100%</span>
                                  <div className="slice">
                                      <div className="bar"></div>
                                      <div className="fill"></div>
                                  </div>
                                  <div className="circle-progress__title">SQL</div>
                              </div>
                          </li>
                          <li>
                              <div className="c100 p100 small">
                                  <span>100%</span>
                                  <div className="slice">
                                      <div className="bar"></div>
                                      <div className="fill"></div>
                                  </div>
                                  <div className="circle-progress__title">زبان مدلسازی UML</div>
                              </div>
                          </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>


  <div className="property-item language__list" data-section="Language">
      <div className="property-item_head">
          <span>
              <i className="fa fa-globe-americas"></i>
          </span>
          <label>
              زبان
          </label>
      </div>
      <div className="property-item_body">
          <div className="item-row w4">
              <ul className="history">
                          
                          <li className="language-presentation-stars ">
                              <h2 className="subtitle language-item ">
                                  انگلیسی
                              </h2>

                                  <span>
                                      <label>مهارت خواندن</label>
                                      <label className="grade">
                                          
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>

                                      </label>
                                  </span>
                                  <span>
                                      <label>مهارت نوشتن</label>
                                      <label className="grade">
                                          
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i><span id="freelancer" className="far fa-star"></span></i>

                                      </label>
                                  </span>
                                  <span>

                                      <label>مهارت گفتاری</label>
                                      <label className="grade">
                                          
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i><span id="freelancer" className="far fa-star"></span></i>

                                      </label>
                                  </span>
                                  <span>

                                      <label>مهارت شنیداری</label>
                                      <label className="grade">
                                          
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i className="tik"><span id="freelancer" className="far fa-star"></span></i>
      <i><span id="freelancer" className="far fa-star"></span></i>

                                      </label>
                                  </span>
                          </li>
              </ul>

          </div>
          <div className="circle-progress">
              <div className="circle-progress__item">
                  <ul className="history">
                          <li>
                              <h2 className="subtitle language-item  graphical">
                                  فرانسوی


                              </h2>

                                      <div className="c100 p60 small">
                                          <span>60%</span>
                                          <div className="slice">
                                              <div className="bar"></div>
                                              <div className="fill"></div>
                                          </div>
                                          <div className="circle-progress__title">مهارت خواندن</div>
                                      </div>
                                      <div className="c100 p60 small">
                                          <span>60%</span>
                                          <div className="slice">
                                              <div className="bar"></div>
                                              <div className="fill"></div>
                                          </div>
                                          <div className="circle-progress__title">مهارت گفتاری</div>
                                      </div>
                                      <div className="c100 p60 small">
                                          <span>60%</span>
                                          <div className="slice">
                                              <div className="bar"></div>
                                              <div className="fill"></div>
                                          </div>
                                          <div className="circle-progress__title">مهارت نوشتن</div>
                                      </div>
                                      <div className="c100 p60 small">
                                          <span>60%</span>
                                          <div className="slice">
                                              <div className="bar"></div>
                                              <div className="fill"></div>
                                          </div>
                                          <div className="circle-progress__title">مهارت شنیداری</div>
                                      </div>

                          </li>
                          <li>
                              <h2 className="subtitle language-item  graphical">
                                  انگلیسی


                              </h2>

                                      <div className="c100 p100 small">
                                          <span>100%</span>
                                          <div className="slice">
                                              <div className="bar"></div>
                                              <div className="fill"></div>
                                          </div>
                                          <div className="circle-progress__title">مهارت خواندن</div>
                                      </div>
                                      <div className="c100 p80 small">
                                          <span>80%</span>
                                          <div className="slice">
                                              <div className="bar"></div>
                                              <div className="fill"></div>
                                          </div>
                                          <div className="circle-progress__title">مهارت گفتاری</div>
                                      </div>
                                      <div className="c100 p80 small">
                                          <span>80%</span>
                                          <div className="slice">
                                              <div className="bar"></div>
                                              <div className="fill"></div>
                                          </div>
                                          <div className="circle-progress__title">مهارت نوشتن</div>
                                      </div>
                                      <div className="c100 p80 small">
                                          <span>80%</span>
                                          <div className="slice">
                                              <div className="bar"></div>
                                              <div className="fill"></div>
                                          </div>
                                          <div className="circle-progress__title">مهارت شنیداری</div>
                                      </div>

                          </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>

  <div className="property-item certificate__list" data-section="Certificate">
      <div className="property-item_head">
          <span>
              <i className="fa fa-tasks"></i>
          </span>
          <label>
              دوره‌ها و گواهینامه‌ها
          </label>

      </div>
      <div className="property-item_body">
          <ul className="history one-line">
          {/*
                  <li className="has-date">
                      <h2 className="subtitle bidirectional">مدیریت پروژه</h2>
                      <h3 className="subtitle">موسسه: آریانا</h3>
                          <label className="date">بهمن ۱۳۹۴</label>

                  </li>
                  <li className="has-date">
                      <h2 className="subtitle bidirectional">مدیریت کیفیت ISO9001</h2>
                      <h3 className="subtitle">موسسه: Moody International</h3>
                          <label className="date">آذر ۱۳۹۳</label>

                  </li>
                  <li className="has-date">
                      <h2 className="subtitle bidirectional">IELTS</h2>
                      <h3 className="subtitle">موسسه: کیش</h3>
                          <label className="date">خرداد ۱۳۹۰</label>

                  </li>
                  <li className="has-date">
                      <h2 className="subtitle bidirectional">Database Administration</h2>
                      <h3 className="subtitle">موسسه:  فراتر از دانش</h3>
                          <label className="date">مرداد ۱۳۹۲</label>

                  </li>
                  <li className="has-date">
                      <h2 className="subtitle bidirectional">ASP.NET MVC</h2>
                      <h3 className="subtitle">موسسه: فراتر از دانش</h3>
                          <label className="date">فروردین ۱۳۹۴</label>

                  </li>
                  <li className="has-date">
                      <h2 className="subtitle bidirectional">برنامه‌ نویسی شی‌گرا در #C</h2>
                      <h3 className="subtitle">موسسه:  فراتر از دانش</h3>
                          <label className="date">اردیبهشت ۱۳۹۳</label>

                  </li>
                  <li className="has-date">
                      <h2 className="subtitle bidirectional">سی شارپ پیشرفته و EntityFramework</h2>
                      <h3 className="subtitle">موسسه: فراتر از دانش</h3>
                          <label className="date">بهمن ۱۳۹۳</label>

                  </li>
                  <li className="has-date">
                      <h2 className="subtitle bidirectional"> طراحی و پیاده‌سازی دیتابیس SQL Server</h2>
                      <h3 className="subtitle">موسسه: فراتر از دانش</h3>
                          <label className="date">آبان ۱۳۸۹</label>

                  </li> 
  */}
          </ul>
      </div>
  </div>




  <div className="property-item research__list" data-section="Research">
      <div className="property-item_head">
          <span>
              <i className="fa fa-search"></i>
          </span>

            <label>
              تحقیقات
          </label>

      </div>
      <div className="property-item_body">
          <ul className="history one-line">
              <li className="has-date">
                  <h2 className="subtitle bidirectional">

                      <span>اعتبارسنجی مشتریان بانک ها با استفاده از ترکیب الگوریتم ماشین بردار با کلونی مورچگان</span>
                  </h2>
                      <h3 className="subtitle">
                          پایان نامه کارشناسی ارشد                         
                      </h3>

                      <label className="date">اسفند 1396</label>

                       

              </li>
          </ul>
      </div>
  </div>

  







          </div>
      </div>

  </div>

   

      
     
  );
}
