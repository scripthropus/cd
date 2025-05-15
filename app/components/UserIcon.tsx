import { Avatar } from "@mui/material";
import { auth } from "../../auth";

export default async function UserIcon() {
	const session = await auth();

	return (
		<Avatar
			alt={session?.user?.name ?? "unknown"}
			src={session?.user?.image ?? "unknown"}
		/>
	);
}
