import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs, Timestamp } from "firebase/firestore";
import { db } from "./firebase"; // Make sure you export db from your Firebase setup

const Records = () => {
  const [record, setRecord] = useState({ type: "", details: "", amount: "", date: "" });
  const [records, setRecords] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(getAuth(), async (u) => {
      setUser(u);
      if (u) loadRecords(u.uid);
    });
    return () => unsub();
  }, []);

  const loadRecords = async (uid) => {
    const q = query(collection(db, "records"), where("uid", "==", uid));
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setRecords(list);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    const entry = {
      ...record,
      uid: user.uid,
      date: Timestamp.fromDate(new Date(record.date)),
    };
    await addDoc(collection(db, "records"), entry);
    setRecord({ type: "", details: "", amount: "", date: "" });
    loadRecords(user.uid);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Record</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input type="text" value={record.type} onChange={e => setRecord({ ...record, type: e.target.value })} placeholder="Type (sale, feed, crop...)" className="border p-2 w-full" required />
        <input type="text" value={record.details} onChange={e => setRecord({ ...record, details: e.target.value })} placeholder="Details" className="border p-2 w-full" />
        <input type="number" value={record.amount} onChange={e => setRecord({ ...record, amount: e.target.value })} placeholder="Amount" className="border p-2 w-full" required />
        <input type="date" value={record.date} onChange={e => setRecord({ ...record, date: e.target.value })} className="border p-2 w-full" required />
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">Save Record</button>
      </form>
      <h3 className="text-xl font-semibold mb-2">Your Records</h3>
      <ul className="space-y-2">
        {records.map((r) => (
          <li key={r.id} className="border p-2 rounded">
            <strong>{r.type}</strong> - {r.details} - ${r.amount} on {r.date.toDate().toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Records;
