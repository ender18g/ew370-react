import { useDatabase, useDatabaseObjectData } from 'reactfire';
import { Box, Heading, Checkbox } from '@chakra-ui/react';
import './Admin.css';

function Admin() {
	const database = useDatabase();
	const userRef = database.ref('users');
	const allUsers = useDatabaseObjectData(userRef);

	const editorsRef = database.ref('editor');
	const editorsUsers = useDatabaseObjectData(editorsRef);

	const adminRef = database.ref('admins');
	const adminUsers = useDatabaseObjectData(adminRef);

	const handleChange = (uid, event) => {
		const { name, checked } = event.target;
		if (name === 'editors') {
			editorsRef.update({ [uid]: checked });
		}
		if (name === 'admins') {
			adminRef.update({ [uid]: checked });
		}
	};

	return (
		<Box className="Admin">
			<Heading m={2} textAlign="center">
				Administrator
			</Heading>
			<table className="admin-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Editor</th>
						<th>Admin</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(allUsers).map((k) => {
						const uid = allUsers[k].uid;
						return (
							<tr key={uid} className="table-row">
								<td>{allUsers[k].displayName}</td>
								<td>{allUsers[k].email}</td>
								<td>
									<Checkbox
										isChecked={editorsUsers[uid] ? true : false}
										name="editors"
										variantColor="green"
										uid={uid}
										onChange={(e) => {
											handleChange(uid, e);
										}}
									/>
								</td>
								<td>
									<Checkbox
										isChecked={adminUsers[uid] ? true : false}
										name="admins"
										variantColor="red"
										uid={uid}
										onChange={(e) => {
											handleChange(uid, e);
										}}
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</Box>
	);
}

export default Admin;
