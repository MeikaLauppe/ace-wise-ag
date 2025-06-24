import React, { useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { db } from "./firebase";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(getAuth(), async (u) => {
      setUser(u);
      if (u) {
        const q = query(collection(db, "records"), where("uid", "==", u.uid));
        const snapshot = await getDocs(q);
        const summary = {};
        snapshot.forEach(doc => {
          const rec = doc.data();
          const key = rec.type;
          summary[key] = (summary[key] || 0) + Number(rec.amount);
        });
        setData(Object.entries(summary).map(([type, amount]) => ({ type, amount })));
      }
    });
    return () => unsub();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#047857" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
