import "./Entry.css";

const Entry = (props) => {
    const entry = props.entry;
    return <div className="Entry">
        <h1>{entry.className}{entry.section ? " Section " + entry.section : ""} Taken with {entry.professorName}</h1>
        <p>{entry.feedback}</p>
        <p>Workload rating: {entry.workload}</p>
        <p>Is lecture mandatory? {entry.lectureMandatory ? "Yes" : "No"}</p>
        <p>Is discussion mandatory? {entry.discussionMandatory}</p>
        <p>Is homework mandatory? {entry.homeworkMandatory}</p>
        <p>Is lab mandatory? {entry.labsMandatory}</p>
    </div>
}

export default Entry;