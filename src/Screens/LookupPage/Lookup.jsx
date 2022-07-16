import "./LookupPage.css";
import Entry from "../../components/Entry/Entry";
import { useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const LookupPage = () => {
    const [searchValue, setSearchValue] = useState("")
    const [entries, setEntries] = useState([]);

    return <div className="LookupPage">
        <input className="lookupInput" type="input" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

        <button className="lookupButton" onClick={async () => {
            const db = getFirestore();

            const q = query(collection(db, "user-entries"), where("className", "==", searchValue));

            const querySnapshot = await getDocs(q);

            let tempArr = [];

            querySnapshot.forEach((doc) => {
                tempArr.push(doc.data());
                console.log(doc.data());
            });

            setEntries(tempArr)


        }}>Search</button>


        <div className="lookupEntries">
            {entries.map((entry) => {
                if(entry.approved) {
                    return <Entry entry={entry} />
                }
            })}
        </div>

    </div>
}

export default LookupPage;