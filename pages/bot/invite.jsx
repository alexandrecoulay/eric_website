import React from "react";
import { useRouter } from "next/router";

import { inviteboturl } from "../../Service/constante";
import Seo from "../../Components/Seo";

function InviteRedirect() {

    const router = useRouter();

    if(typeof window !== "undefined") {
        router.push(inviteboturl)
    }

    return (
        <Seo title="Invite Eric Discord Bot" description="Invite Eric Discord Bot to you server" />
    )
}

export default InviteRedirect