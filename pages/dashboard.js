const Dashboard = ({login, id, url}) => {
    return (
    <>  
     <h1>{login}</h1>
     <p>{id}</p>
     <a href={url}>{url}</a>
    </>
    )
};

Dashboard.getInitialProps = async ({query}) => {
    const res = await fetch('https://api.github.com/users/jasonewins');
    const user = res.json();

    return user;
}   


export default Dashboard;