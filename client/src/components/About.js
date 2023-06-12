import './css/About.css';

const About = () => {
    return (
      <div className="py-14">
        
        <div className=" flex justify-center my-8">
          <h1 className="text-5xl font-extrabold text-center text-white">
            ABOUT US
          </h1>
        </div>
        <div className="flex">
          <p className="text-white mx-20 p-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab a vero cupiditate quod illum? Ullam neque ex animi molestias blanditiis nesciunt soluta assumenda unde veniam consequatur itaque, fuga rem atque voluptas repellendus! Officia sint iusto, architecto quo sapiente quaerat aliquid vero distinctio ex, voluptates natus cum vel commodi, ducimus assumenda! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sapiente totam ullam expedita architecto accusantium nisi exercitationem consequatur a alias voluptatem eius in quia, sit ab mollitia, culpa harum qui?</p>
          
     <div className="text-white mr-24">
      <h1 className="text-white py-2 text-center text-3xl">THE TEAM</h1>
          <div className="container pt-10 ">
            <div className="wrapper mx-3">
              <a href="#demo-modal">PRIYANSHU VERMA</a>
            </div>
  
            <div id="demo-modal" className="modal">
              <div className="modal__content">
                <h1>PRIYANSHU VERMA</h1>
  
                <p>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, ipsum. Quae hic reprehenderit itaque, explicabo in consequuntur deserunt dolorem obcaecati exercitationem aspernatur quam est doloribus iste! Impedit corporis repudiandae quam alias laudantium numquam voluptatem ab obcaecati dolor dolorum. Temporibus, reiciendis.
                </p>
  
                <div className="modal__footer"></div>
  
                <a href="#" className="modal__close">
                  &times;
                </a>
              </div>
            </div>
  
            <div className="wrapper">
              <a href="#demo-modal">Harshil Sharma</a>
            </div>
  
            <div id="demo-modal" className="modal">
              <div className="modal__content">
                <h1>HARSHIL SHARMA</h1>
  
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tempore enim, minima magni placeat nihil magnam qui tempora ullam doloribus mollitia aliquam, numquam repellat eum ipsum nobis nostrum temporibus saepe amet eveniet, molestias earum facere. Laboriosam laborum reprehenderit odio inventore.
                </p>
  
                <div className="modal__footer"></div>
  
                <a href="#" className="modal__close">
                  &times;
                </a>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
        
      
    );
  };
  
  export default About;