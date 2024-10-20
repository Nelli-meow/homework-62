import * as React from 'react';

const Home = () => {
  const image = 'https://i.pinimg.com/enabled_lo/564x/45/b4/23/45b423ce9ae57854ca7087cd3bf801c8.jpg';
  return (
    <div className="container mt-5">
      <h1 className="mb-3">Home Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, nihil.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorem exercitationem harum natus quasi quisquam quo rem vitae. A ab accusamus eveniet ipsa vel? Dolorem, totam!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad placeat quidem sunt vitae. Corporis, error?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor dolores est fugiat inventore labore obcaecati, placeat quos. Aliquid cupiditate facere maxime odit omnis! Ad beatae facere hic inventore nam, non quaerat ut vitae voluptatibus!</p>
      <img src={image} alt="lol" className="mt-5" />
    </div>
  );
};

export default Home;