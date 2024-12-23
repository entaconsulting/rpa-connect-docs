# Microsoft Teams Notification Configuration

To allow the RPA Connect application to generate notifications through Teams, you first need to create the corresponding application. From Microsoft Entra ID, navigate to _**App Registration > New registration**_.

<figure><img src="../../../.gitbook/assets/rpa_entra_id_5.png" alt=""><figcaption><p>Application registration</p></figcaption></figure>

Enter the desired name for the application (e.g., RPA Connect – Notifications) and select the option _**Accounts in this organizational directory only**_. Click the _**Register**_ button to confirm.

Next, go to _**API Permission**_ and press _**Add a Permission**_. Select the Microsoft Graph API to configure its permissions. This will allow notifications to be sent to groups and users.

<figure><img src="../../../.gitbook/assets/rpa_entra_id_6.png" alt=""><figcaption><p>API selection</p></figcaption></figure>

Click on _**Application permissions**_ and use the search bar to find the permissions _**GroupMember.Read.All**_ and _**Application.Read.All**_.

<figure><img src="../../../.gitbook/assets/rpa_entra_id_7.png" alt=""><figcaption><p>Application permissions</p></figcaption></figure>

Once you have located them, check the box _**Grant admin consent…**_ to authorize their use.

<figure><img src="../../../.gitbook/assets/rpa_entra_id_8.png" alt=""><figcaption><p>Permission authorization</p></figcaption></figure>