import styles from "@/app/ui/dashboard/enquiries/singleEnquiry/singleEnquiry.module.css";

const singleEnquiryPage = async () => {

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label>Title</label>
                <input type="text" name="title" placeholder="username" />
                <label>Description</label>
                <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
                </form>
            </div>
        </div>
    )
}

export default singleEnquiryPage;