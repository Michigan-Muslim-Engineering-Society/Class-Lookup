import "./SubmissionForm.css";
import { useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";


const SubmissionForm = () => {
    const [firstName, setFirstName] = useState("Zalan");
    const [lastName, setLastName] = useState("Shah");
    const [uniqName, setUniqName] = useState("zalans");
    const [gradYear, setGradeYear] = useState(2024);
    const [className, setClassName] = useState("");
    const [professorName, setProfessorName] = useState("");
    const [section, setSection] = useState();
    const [lectures, setLectures] = useState();
    const [homework, setHomework] = useState();
    const [discussions, setDiscussions] = useState();
    const [labs, setLabs] = useState();
    const [format, setFormat] = useState();
    const [semester, setSemester] = useState();
    const [workload, setWorkload] = useState();
    const [feedback, setFeedback] = useState("");

    return <div className="submissionFormContainer">
        <form>
            <div className="submissionFormQuestion">
                <label for="classTaken">Which class did you take? Please write the department name in uppercase, one space, and then the number of the class.</label>
                <input type="text" className="classTakenInput" name="classTaken" placeholder='eg. "EECS 281" or "MCDB 310"' onChange={(e) => setClassName(e.target.value.toUpperCase())}></input>
            </div>

            <div className="submissionFormQuestion">
                <label for="professorTaken">Which professor did you have?</label>
                <input type="text" className="professorInput" name="professorTaken" placeholder='eg. "David Paoletti"' onChange={(e) => setProfessorName(e.target.value)}></input>
            </div>

            <div className="submissionFormQuestion">
                <label for="section">Which section did you take? (Only fill this out if different sections taught different material i.e. ENGR 101 or ENGLISH 125. Please put ONLY the section number)</label>
                <input type="text" className="sectionInput" name="section" onChange={(e) => setSection(parseInt(e.target.value))}></input>
            </div>

            <div className="submissionFormQuestion">
                <label for="lectureMandatory">Were lectures mandatory? (i.e. did lecture attendance bear any weight on your grade?)</label>                
                <div><input type="radio" value="Yes" className="lectureMandatoryInput" name="lectureMandatory" onClick={() => setLectures(true)}/>Yes</div>
                <div><input type="radio" value="No" className="lectureMandatoryInput" name="lectureMandatory" onClick={() => setLectures(false)}/>No</div>

            </div>

            <div className="submissionFormQuestion">
                <label for="homeworkMandatory">Was homework mandatory? (i.e. did homework completion bear any weight on your grade?)</label>
                <div><input type="radio" value="Yes" className="homeworkMandatoryInput" name="homeworkMandatory" onClick={(e) => setHomework(e.target.value)}/>Yes</div>
                <div><input type="radio" value="Yes, but it was graded on completeness" className="homeworkMandatoryInput" name="homeworkMandatory" onClick={(e) => setHomework(e.target.value)}/>Yes, but it was graded on completeness</div>
                <div><input type="radio" value="No, but it was offered as study materials" className="homeworkMandatoryInput" name="homeworkMandatory" onClick={(e) => setHomework(e.target.value)}/>No, but it was offered as study materials</div>
                <div><input type="radio" value="No, and we weren't offered any, either" className="homeworkMandatoryInput" name="homeworkMandatory" onClick={(e) => setHomework(e.target.value)}/>No, and we weren't offered any, either</div>
            </div>

            <div className="submissionFormQuestion">
                <label for="discussionMandatory">Were discussions mandatory? (i.e. did discussion attendance bear any weight on your grade?)</label>
                <div><input type="radio" value="Yes" className="discussionMandatoryInput" name="discussionMandatory" onClick={(e) => setDiscussions(e.target.value)}/>Yes</div>
                <div><input type="radio" value="No, but there were mandatory assignments from discussions" className="discussionMandatoryInput" name="discussionMandatory" onClick={(e) => setDiscussions(e.target.value)}/>No, but there were mandatory assignments from discussions</div>
                <div><input type="radio" value="No" className="discussionMandatoryInput" name="discussionMandatory" onClick={(e) => setDiscussions(e.target.value)}/>No</div>
                <div><input type="radio" value="No, and we had no discussions, either" className="discussionMandatoryInput" name="discussionMandatory" onClick={(e) => setDiscussions(e.target.value)}/>No, and we had no discussions, either</div>
            </div>

            <div className="submissionFormQuestion">
                <label for="labMandatory">Were labs mandatory? (i.e. did lab attendance bear any weight on your grade?)</label>
                <div><input type="radio" value="Yes" className="labMandatoryInput" name="labMandatory" onClick={(e) => setLabs(e.target.value)}/>Yes</div>
                <div><input type="radio" value="No, but there were mandatory assignments from labs" className="labMandatoryInput" name="labMandatory" onClick={(e) => setLabs(e.target.value)}/>No, but there were mandatory assignments from labs</div>
                <div><input type="radio" value="No" className="labMandatoryInput" name="labMandatory" onClick={(e) => setLabs(e.target.value)}/>No</div>
                <div><input type="radio" value="No, and we had no labs, either" className="labMandatoryInput" name="labMandatory" onClick={(e) => setLabs(e.target.value)}/>No, and we had no labs, either</div>
            </div>

            <div className="submissionFormQuestion">
                <label for="format">In which format did you take this class?</label>
                <div><input type="radio" value="In-person" className="formatInput" name="format" onClick={(e) => setFormat(e.target.value)}/>In-person</div>
                <div><input type="radio" value="Hybrid" className="formatInput" name="format" onClick={(e) => setFormat(e.target.value)}/>Hybrid</div>
                <div><input type="radio" value="Virtual" className="formatInput" name="format" onClick={(e) => setFormat(e.target.value)}/>Virtual</div>
            </div>

            <div className="submissionFormQuestion">
                <label for="semester">Which semester did you take this class?</label>
                <div><input type="radio" value="Fall" className="semesterInput" name="semester" onClick={(e) => setSemester(e.target.value)}/>Fall</div>
                <div><input type="radio" value="Winter" className="semesterInput" name="semester" onClick={(e) => setSemester(e.target.value)}/>Winter</div>
                <div><input type="radio" value="Spring" className="semesterInput" name="semester" onClick={(e) => setSemester(e.target.value)}/>Spring</div>
                <div><input type="radio" value="Summer" className="semesterInput" name="semester" onClick={(e) => setSemester(e.target.value)}/>Summer</div>
                <div><input type="radio" value="Spring/Summer" className="semesterInput" name="semester" onClick={(e) => setSemester(e.target.value)}/>Spring/Summer</div>
            </div>

            <div className="submissionFormQuestion">
                <label for="workload">Imagine rating all of your classes on a scale of 1% to 100% in terms of difficulty/workload. Summing all of these percentages should be around 100% difficulty. With this scale in mind, what percentage would you give this class? (Please put ONLY the number i.e. 64)</label>
                <input type="text" className="workloadInput" name="workload" value={workload} onChange={(e) => setWorkload(e.target.value)}></input>
            </div>

            <div className="submissionFormQuestion">
                <label for="feedback">Give your feedback for this class. What do you wish you knew before taking this class? What are some things that helped you? How was this professor? What are your thoughts? Feel free to explain anything related to this class you wish you knew.</label>
                <textarea className="feedbackInput" name="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
            </div>
        </form>

        <button className="submissionButton" onClick={
            async () => {
                
                const finalValue = {
                    firstName: firstName,
                    lastName: lastName,
                    className: className,
                    discussionMandatory: discussions,
                    feedback: feedback,
                    format: format,
                    gradYear: gradYear,
                    homeworkMandatory: homework,
                    labsMandatory: labs,
                    lectureMandatory: lectures,
                    professorName: professorName,
                    section: section ? section : null,
                    semester: semester,
                    uniqName: uniqName,
                    workload: workload,
                    approved: true,
                    reviewed: false
                };

                console.log(finalValue);

                const db = getFirestore();

                const docRef = await addDoc(collection(db, "user-entries"), finalValue).then(() => {
                    toast.success("Submitted Entry!");
                })


            }
        }>Submit</button>

        <Toaster />
    </div>
}

export default SubmissionForm;