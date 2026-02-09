const hackathonData = [
    {
        no: 1,
        name: "Food Scope",
        teams: "2 Unstop",
        r1: "—",
        r2: "—",
        finale: "14 Feb",
        status: "Applied",
        location: "IIIT Delhi"
    },
    {
        no: 2,
        name: "Hack The Tank",
        teams: "2 Unstop, 1 Devfolio",
        r1: "—",
        r2: "—",
        finale: "14 Feb",
        status: "Rejected (Devfolio)",
        location: "SVNIT"
    },
    {
        no: 3,
        name: "InnovGenius",
        teams: "2 Unstop",
        r1: "15 Feb",
        r2: "17 Feb",
        finale: "20 Feb",
        status: "Yet to register",
        location: "Thakur College, Mumbai"
    },
    {
        no: 4,
        name: "Hack For Green Bharat",
        teams: "2 Unstop",
        r1: "21 Feb",
        r2: "—",
        finale: "28 Feb",
        status: "Yet to register",
        location: "Microsoft Office, Noida (Delhi NCR)"
    },
    {
        no: 5,
        name: "Loop 1.0",
        teams: "2 Unstop",
        r1: "20 Feb",
        r2: "—",
        finale: "11 Mar",
        status: "Yet to register",
        location: "BVP, Navi Mumbai"
    },
    {
        no: 6,
        name: "Aarohan 1.0",
        teams: "2 Unstop",
        r1: "—",
        r2: "—",
        finale: "6 Mar",
        status: "Yet to register",
        location: "D.Y. Patil College, Mumbai"
    },
    {
        no: 7,
        name: "Hacknova 5.0",
        teams: "1 Devfolio",
        r1: "—",
        r2: "—",
        finale: "13 Mar",
        status: "Yet to register",
        location: "Thakur College, Mumbai"
    },
    {
        no: 8,
        name: "HackByte 4.0",
        teams: "1 Devfolio",
        r1: "—",
        r2: "—",
        finale: "3 Apr",
        status: "Applied (Referral)",
        location: "IIITDM Jabalpur"
    }
];

function renderTable(data = hackathonData) {
    const tbody = document.getElementById('hackathon-body');
    tbody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');

        let statusClass = 'status-pending';
        const lowerStatus = item.status.toLowerCase();
        if (lowerStatus.includes('applied')) statusClass = 'status-applied';
        if (lowerStatus.includes('rejected')) statusClass = 'status-rejected';

        row.innerHTML = `
            <td>${item.no}</td>
            <td style="font-weight: 600; color: #1e1b4b;">${item.name}</td>
            <td>${item.teams}</td>
            <td class="${item.r1 !== '—' ? 'bold-date' : ''}">${item.r1}</td>
            <td class="${item.r2 !== '—' ? 'bold-date' : ''}">${item.r2}</td>
            <td class="bold-date">${item.finale}</td>
            <td><span class="status-badge ${statusClass}">${item.status}</span></td>
            <td>${item.location}</td>
        `;
        tbody.appendChild(row);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});
