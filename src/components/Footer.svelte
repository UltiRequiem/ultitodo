<script>
  const [date, madeDate] = [new Date().getUTCFullYear(), 2022];
  const copyrightYear = date <= madeDate ? madeDate : `${madeDate}-${date}`;
</script>

<footer>
  <p>
    © {copyrightYear}
    <a href="https://ultirequiem.com">Eliaz Bobadilla (a.k.a UltiRequiem) </a>
  </p>
</footer>

<style>
  footer {
    margin-top: 10px;
    background-color: #f5f5f5;
    text-align: center;
    padding: 1px;
  }

  footer p {
    font-size: 20px;
    color: #666;
  }
</style>
