import React from 'react';
import "./Welcome.css"
import LoginButton from '../auth0/login';

function Welcome() {
  return (
    <div>
        <div className='left-div'>
          <p className='div-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit libero, cursus sed neque ac, viverra faucibus metus. Fusce tincidunt, quam eget finibus viverra, nisi ante molestie nulla, sed cursus purus risus vel lacus. Donec semper odio leo. Nulla eget dapibus eros, finibus tristique odio. Ut id metus consequat, molestie urna id, dapibus neque. In eleifend enim est, in lacinia nisl semper non. Donec ornare orci sapien, eu posuere dui venenatis ac. Phasellus rutrum sit amet tortor sed pulvinar. Donec orci urna, consequat at sagittis ac, iaculis vitae metus. In hac habitasse platea dictumst. Donec sed eleifend lorem. Maecenas cursus maximus dolor, non malesuada massa aliquam in. Nulla at nisi tincidunt, bibendum ipsum sit amet, viverra leo.Vivamus consectetur commodo erat, sed sollicitudin odio ornare ultrices. In hac habitasse platea dictumst. Nullam vitae tempor nisi. Duis egestas id arcu quis congue. Sed vel orci porta, maximus sem sed, placerat turpis. Vivamus vulputate ipsum orci, a maximus ipsum sagittis sit amet. Nulla rhoncus ultricies ligula, a lacinia orci pellentesque sed. Vivamus non urna sollicitudin, iaculis sem a, gravida justo. Praesent condimentum nisi nunc, vitae elementum orci eleifend nec. Aliquam non tempor neque. Curabitur gravida turpis vel aliquet scelerisque. Vestibulum odio purus, tincidunt ac lacinia vel, convallis vel nisl. Aenean volutpat blandit sapien, nec aliquam nisi mattis a.In vitae bibendum dolor. Etiam vitae purus tortor. Praesent euismod rutrum velit dapibus blandit. Aenean faucibus elementum tempus. Ut tempor, odio commodo venenatis fringilla, tortor quam laoreet quam, in mattis lacus dui et odio. Quisque scelerisque sit amet odio id tristique. Morbi tellus est, vehicula ut orci nec, pulvinar lobortis ex. Mauris congue vitae massa id ultrices. Vestibulum finibus est sit amet felis imperdiet, eleifend fringilla velit luctus. Maecenas posuere id urna et molestie. Nullam et ante sed ipsum scelerisque accumsan.Nullam porta augue in nibh ornare porttitor. Quisque sagittis metus vitae justo malesuada, vitae consequat nisl porta. Sed vel diam ex. Mauris sed ex mollis ligula ultricies lobortis et et diam. Fusce porttitor, ex et lobortis vestibulum, nisl leo mattis eros, sed commodo ligula sem ac enim. Etiam eu urna ipsum. Proin varius consequat metus. Nunc facilisis, tellus id aliquet consectetur, tellus neque finibus quam, et blandit mauris velit in sem. Nulla tristique tempus dapibus. Maecenas ac tristique dui. Sed finibus ornare consectetur. Pellentesque lacinia orci tortor, condimentum molestie ante varius eu. Suspendisse velit augue, cursus non mauris vitae, cursus maximus sapien. Donec feugiat risus quis metus semper tristique.Ut orci lectus, viverra sit amet erat sed, auctor porta nunc. Praesent porttitor nisi eu eros fringilla, hendrerit ullamcorper est pharetra. Quisque gravida tincidunt ipsum, ut posuere diam finibus ut. Pellentesque justo ipsum, aliquet in tellus sed, porttitor sollicitudin turpis. Etiam et dapibus ipsum. In in neque ac ex laoreet auctor. Aliquam eget dolor facilisis, efficitur purus sit amet, porta ligula. Etiam rutrum eget lacus quis gravida. Fusce posuere molestie tincidunt. Pellentesque tempus velit ac consectetur sagittis. Duis blandit dolor massa, vitae placerat nulla pretium sit amet. Aliquam erat volutpat. Praesent accumsan ante sed libero consequat, vel efficitur purus elementum. Ut rutrum ipsum quis augue rutrum maximus. Donec porta felis consectetur turpis convallis dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Duis ultricies aliquet lacus, sit amet molestie elit suscipit a. Donec quis lorem vitae nisl semper commodo in eu tortor. Pellentesque luctus justo eu dui luctus pulvinar. Ut sodales congue arcu eget tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra tincidunt risus, et posuere eros. In quam dolor, sodales eget diam quis, gravida iaculis nibh. Aliquam molestie sed sapien quis porta. Quisque quis bibendum turpis, vitae vestibulum nibh. Fusce at dolor at libero placerat blandit lobortis sit amet elit. Curabitur suscipit nisl et risus egestas condimentum.
          </p>
          <div className="circle">
            <p className='circle-text'>SkillScape</p>4
            <p className='circle2-text'>Your Personal Profile Builder</p>
          </div>
        </div>
        <div className="right-div">
          <LoginButton/>
          
          {/* <button className="signUp">SignUp</button> */}
          <img src="https://res.cloudinary.com/dvfeh6kup/image/upload/v1681033171/skillscape-black-logo_fco0tn.png" alt="" className="logo" />
        </div>
    </div>
  )
}

export default Welcome