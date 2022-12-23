// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = `Solution is ${magic5GonRing()} <br>`;
    // Display Information in the Browser
    document.getElementById("solutioninfo").innerHTML = txt;
}

// Function to Find the Maximum Number
function magic5GonRing() {
    let sum = (1+2+3+4+5)*2 + 6+7+8+9+10;
    let nodeValue = sum/5;
    let first = 6;
    let max = '0';
    for (let i=1;i<=5;i++) {
        let rest = [7,8,9,10];
        for (let j=1;j<=5;j++) {
            if (i==j) continue;
            let total = first + i + j;
            if (total != nodeValue) continue;
            for (let k=1;k<=5;k++) {
                if (k==i || k==j) continue;
                let second = total - j - k;
                if (second>10 || second==i || second==j || second==first) continue;
                rest.splice(second,1);
                for (let l=1;l<=5;l++) {
                    if (l==i || l==j || l==k) continue;
                    let third = total - l - k;
                    if (third>10 || third==i || third==j || third==k || third==first || third==second) continue;
                    rest.splice(third,1);
                    for (let m=1;m<=5;m++) {
                        if (m==i || m==j || m==k || m==l) continue;
                        let fourth = total - m - l;
                        if (fourth>10 || fourth==i || fourth==j || fourth==k || fourth==l || fourth==first || fourth==second || fourth==third) continue;
                        rest.splice(fourth,1);
                        let value = ''+first+i+j+second+j+k+third+k+l+fourth+l+m+rest[0]+m+i;
                        if (value>max) max=value;
                    }
                }
            }
        }
    }
    // Convert max to an integer
    const result = parseInt(max);
    return result;
}

// Function to Hide Solution
function hideSolution() {
    let txt = "";
    document.getElementById("solutioninfo").innerHTML = txt;
}