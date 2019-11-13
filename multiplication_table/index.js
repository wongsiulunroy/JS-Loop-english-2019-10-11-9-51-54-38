<script>
  
for (let i = 1; i < 10; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
        string += `${i}*${j}=${i*j} `;
    }
    console.log(`${string}`);
}
</script>
