const Dashboard = () => {
  return (
    <>
      <section className="title">
        <h1>Dashboard</h1>

        <h2>Welcome to your dashboard!</h2>
        <p>
          Here you can manage your account settings, view your listings, and
          more.
        </p>
      </section>
      <section className="dashboard-actions">
        <button className="btn">View Listings</button>
        <button className="btn">Manage Account</button>
      </section>
      <section className="dashboard-stats">
        <h3>Your Impact</h3>
        <ul>
          <li>Total Listings: 10</li>
          <li>Total Purchases: 5</li>
          <li>Points Balance: 100</li>
        </ul>
      </section>
      <section className="dashboard-recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>Purchased Item: Awesome Widget</li>
          <li>Listed Item: Cool Gadget</li>
          <li>Updated Profile</li>
        </ul>
      </section>
    </>
  );
};

export default Dashboard;
