# AD Group Management

As we analyzed earlier, there are various roles when interacting with RPA Connect, each with specific characteristics and functionalities. From Microsoft Entra ID, it is possible to create new groups with their respective permissions. Let's take a look at them:

* **Developers:** These are the users who have access to the _**Build**_ application ([https://app.rpaconnect.io/build](https://app.rpaconnect.io/build)) and are responsible for creating and editing forms. They can design new templates and, depending on their permissions, manage form instances. **This role corresponds to the permission **_**Manage form definitions**_**.**
* **Administrators:** These users have access to the _**Admin**_ application ([https://app.rpaconnect.io/admin](https://app.rpaconnect.io/admin)) and can manage user onboarding and offboarding, group configurations, role and permission assignments, as well as access to forms and workspaces. **This role corresponds to the permission **_**Manage Admin settings**_**.**
* **Connect Users:** These are users who can be assigned forms defined as _**Connect Only**_ and can access the Portal ([https://app.rpaconnect.io/portal](https://app.rpaconnect.io/portal)) to view them. **This role corresponds to the permission **_**Connect user**_**.**

To create a new group from Microsoft Entra ID, navigate to _**Enterprise applications > RPA Connect > Users and Groups**_ and click _**Add user/group**_.

<figure><img src="../../.gitbook/assets/rpa_entra_id_2.png" alt=""><figcaption><p>Creating a group in Microsoft Entra ID</p></figcaption></figure>

Next, select the user or group and their corresponding permissions. Click _**OK**_ to confirm the process.\
Try creating a group for users responsible for generating new forms, which we will call "Developers." Assign the permission _**Manage form definitions**_ to this group.

When a new group is created, a specific ID will be generated for it, which can be copied and used to manage this group on the RPA Connect platform.

<figure><img src="../../.gitbook/assets/rpa_entra_id_3.png" alt=""><figcaption><p>Group ID</p></figcaption></figure>

Copy the ID corresponding to the group you created and go to the _**Admin App**_. Navigate to _**Users And Groups > Groups**_ and click on _**New Group**_.

Fill in the defined name and role, and toggle the _**AAD Integration**_ switch. A new field will appear where you can paste the corresponding ID.

<figure><img src="../../.gitbook/assets/rpa_entra_id_4.png" alt=""><figcaption><p>AAD Integration</p></figcaption></figure>

This will import the group created in Microsoft Entra ID and activate the connection.