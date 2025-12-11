import db from "@/utils/db";

async function AboutPage() {
  await db.testProfile.create({
    data: {
      name: "random name",
    },
  });

  const users = await //(!!!)
    await db.testProfile.findMany();

  return (
    <div>
      {users.map((user) => (
        <h2
          key={user.id}
          className="text-2xl font-bold"
        >
          {user.name}
        </h2>
      ))}
    </div>
  );
}

export default AboutPage;