import { html } from "htm/preact";
import { User } from "./User";
import type { User as UserEntity } from "../types/entity-types";

export const Users = ({ users }: { users: UserEntity[] }) => {
	return html`
		<div className="users">
			${users.map((user) => html`<${User} key=${user.username} ...${user} />`)}
		</div>
	`;
};
