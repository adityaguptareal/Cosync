const AdminSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    secretCode: "",
  });

  const handleSignup = async () => {
    alert(res.data.message);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignup();
      }}
    >
      <input
        placeholder="Username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        placeholder="Secret Code"
        onChange={(e) =>
          setFormData({ ...formData, secretCode: e.target.value })
        }
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};
